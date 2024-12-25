import { z, ZodType } from 'zod';
import { ActionResponse, ContactFormData } from './types';

const contactFormSchema: ZodType<ContactFormData> = z.object({
  name: z.string().min(1, '名前または会社名を入力してください。'),
  email: z.string().min(1, 'メールアドレスを入力してください。'),
  contents: z.string().min(1, 'お問い合わせ内容を入力してください。'),
});

/**
 * Google Formへの送信に必要なinput name
 * サイト側のinputとGoogle Formのinputがそれぞれ対応している
 */
const POST_INPUT_NAMES = {
  name: 'entry.461453517',
  email: 'entry.2068566578',
  contents: 'entry.1423539808',
} as const;

/**
 * 送信先Google FormのURL
 */
const POST_URL =
  'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeBvPa0tULPpZn-id6iUpuIC4mLMA_dO_OoVkiK4fUrPoO8QA/formResponse';

type FormNames = keyof ContactFormData;

/**
 * Contactフォームからのお問い合わせ内容を送信する
 *
 * 現状、Google Form（以下GF）をカスタムしてコミュニティサイトからGF本体にデータ送信しています。
 * （GFが必要とするinput nameを抽出し、問い合わせ内容と共にGF本体があるURLに送信している）
 * GFの仕様上no-corsでしか送れないのでレスポンスを受け取れません。
 * その為、送信成否のエラーハンドリングを書いていません。
 * 参考:https://github.com/react-tokyo/tasks/issues/21#issuecomment-2560577026
 * ファーストリリース後に、問い合わせ機能を別のやり方で再構築するのが良いかと思います。
 *
 * @param _prevState 直前の状態（不使用）
 * @param formData Contactフォームからの入力値
 */
export const postContent = async (
  _prevState: ActionResponse | null,
  formData: FormData,
): Promise<ActionResponse> => {
  const rawData: ContactFormData = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    contents: formData.get('contents') as string,
  };

  const validatedData = contactFormSchema.safeParse(rawData);

  if (!validatedData.success) {
    return {
      success: false,
      message: '誤りのある箇所を修正してください。',
      errors: validatedData.error.flatten().fieldErrors,
      inputs: rawData,
    };
  }

  const body = Array.from(
    formData.entries() as Iterable<[FormNames, FormDataEntryValue]>,
  )
    .filter(([key]) => key in POST_INPUT_NAMES)
    .map(
      ([key, value]) =>
        `${POST_INPUT_NAMES[key]}=${typeof value === 'string' ? encodeURIComponent(value) : ''}`,
    )
    .join('&');

  await fetch(POST_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  });

  /**
   * <form>submitイベントのデフォルト動作を利用したフォーム値クリアが
   * できない為ここでクリアする
   */
  const blankData = Object.fromEntries(
    Object.keys(rawData).map((key) => [key, '']),
  ) as ContactFormData;

  return {
    success: true,
    message:
      'お問い合わせありがとうございます🎉担当者よりご連絡いたしますので、しばらくお待ちください。',
    inputs: blankData,
  };
};
