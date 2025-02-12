import { z, ZodType } from 'zod';
import { ActionResponse, ContactFormData, GASResponse } from './types';

const contactFormSchema: ZodType<ContactFormData> = z.object({
  name: z.string().min(1, '名前または会社名を入力してください。'),
  email: z.string().min(1, 'メールアドレスを入力してください。'),
  contents: z.string().min(1, 'お問い合わせ内容を入力してください。'),
});

/**
 * お問い合わせを送信するGASのURL
 */
const POST_URL =
  'https://script.google.com/macros/s/AKfycbx_PhpMikSi0FTzbDfhcpGwLXdTvFD-iZw2lZ99wANS2_aF2RQc7jNE7hwEofp5pEdY/exec';
const POST_INPUT_NAMES = ['name', 'email', 'contents'] as const;
type FormNames = keyof ContactFormData;

/**
 * Contactフォームからのお問い合わせ内容を送信する
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
    Object.entries(validatedData.data) as Iterable<
      [FormNames, FormDataEntryValue]
    >,
  )
    .filter(([key]) => POST_INPUT_NAMES.includes(key))
    .map(
      ([key, value]) =>
        `${key}=${typeof value === 'string' ? encodeURIComponent(value) : ''}`,
    )
    .join('&');

  try {
    const response = await fetch(POST_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    });

    if (!response.ok) {
      return failureResult(rawData);
    }

    const result: GASResponse = await response.json();
    if (!result.success) {
      return failureResult(rawData);
    }

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
  } catch {
    return failureResult(rawData);
  }
};

/**
 * 送信失敗時の結果を返す
 *
 * @param inputs ユーザがフォームに入力したデータ
 * @returns 失敗結果のオブジェクト
 */
const failureResult = (inputs: ContactFormData) => {
  return {
    success: false,
    message:
      'お問い合わせを送信できませんでした。申し訳ございませんがしばらく時間を置いてから再度お試しください。',
    inputs,
  };
};
