"use server";

import { z, ZodType } from "zod";
import { ActionResponse, ContactFormData } from "./types";

const contactFormSchema: ZodType<ContactFormData> = z.object({
  name: z.string().min(1, "名前または会社名を入力してください。"),
  email: z.string().min(1, "メールアドレスを入力してください。"),
  contents: z.string().min(1, "お問い合わせ内容を入力してください。"),
});

/**
 * Google Formへの送信に必要なinput name
 * サイト側のinputとGoogle Formのinputがそれぞれ対応している
 */
const POST_INPUT_NAMES = {
  name: "entry.854538819",
  email: "entry.685323345",
  contents: "entry.1786766899",
} as const;

type FormNames = keyof ContactFormData;

/**
 * Contactフォームからのお問い合わせ内容を送信する
 *
 * 現在自サイトからGoogle Formにデータ送信しています。
 * Google Formの仕様上no-corsでしか送れないので
 * レスポンスを受け取れません。
 * その為、送信成否のエラーハンドリングは書いてません。
 * ファーストリリース後に、問い合わせ機能を別のやり方で再構築するのが良いかと思います。
 *
 * @param formData Contactフォームからの入力値
 */
export const postContent = async (
  _prevState: ActionResponse | null,
  formData: FormData,
): Promise<ActionResponse> => {
  const rawData: ContactFormData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    contents: formData.get("contents") as string,
  };

  const validatedData = contactFormSchema.safeParse(rawData);

  if (!validatedData.success) {
    return {
      success: false,
      message: "誤りのある箇所を修正してください。",
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
        `${POST_INPUT_NAMES[key]}=${typeof value === "string" ? encodeURIComponent(value) : ""}`,
    )
    .join("&");

  await fetch(
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLSf3i5jYhfn-f1Yhd9gt6r0xeXqfAJjy2SxBGZg9sK7IQ4qNzA/formResponse",
    {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    },
  );

  return {
    success: true,
    message:
      "お問い合わせありがとうございます🎉担当者よりご連絡いたしますので、しばらくお待ちください。",
  };
};
