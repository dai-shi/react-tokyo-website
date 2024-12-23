/**
 * Google Formへの送信に必要なinput name
 * サイト側のinputとGoogle Formのinputがそれぞれ対応している
 */
const POST_INPUT_NAMES = {
  name: "entry.854538819",
  email: "entry.685323345",
  contents: "entry.1786766899",
} as const;

type FormNames = keyof typeof POST_INPUT_NAMES;

export const postContent = async (formData: FormData) => {
  "use server";

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
};
