"use client";

import { useActionState } from "react";
import { postContent } from "./postContent";
import { ActionResponse } from "./types";

const initialState: ActionResponse = {
  success: false,
  message: "",
};
export const Contact = () => {
  const [state, action, isPending] = useActionState(postContent, initialState);

  return (
    <section id="section" className="space-y-4 lg:space-y-8">
      <h2 className="text-3xl font-bold">Contact</h2>
      <form action={action} className="grid gap-7 max-w-[480px] relative">
        <label htmlFor="name" className="block space-y-1">
          お名前<span className="text-[#F45554] text-sm ml-2">*必須</span>
          <input
            type="text"
            name="name"
            defaultValue={state.inputs?.name}
            required
            className="bg-slate-200 w-full rounded-md leading-6 p-2"
          />
          {state?.errors?.name && (
            <p id="streetAddress-error" className="text-sm text-red-500">
              {state.errors.name[0]}
            </p>
          )}
        </label>
        <label htmlFor="email" className="block space-y-1">
          メールアドレス
          <span className="text-[#F45554] text-sm ml-2">*必須</span>
          <input
            type="email"
            name="email"
            defaultValue={state.inputs?.email}
            required
            className="bg-slate-200 w-full rounded-md leading-6 p-2"
          />
          {state?.errors?.email && (
            <p id="streetAddress-error" className="text-sm text-red-500">
              {state.errors.email[0]}
            </p>
          )}
        </label>
        <label htmlFor="contents" className="block space-y-1">
          お問い合わせ内容
          <span className="text-[#F45554] text-sm ml-2">*必須</span>
          <textarea
            name="contents"
            defaultValue={state.inputs?.contents}
            required
            className="bg-slate-200 w-full rounded-md leading-6 p-2 min-h-[250px]"
          ></textarea>
          {state?.errors?.contents && (
            <p id="streetAddress-error" className="text-sm text-red-500">
              {state.errors.contents[0]}
            </p>
          )}
        </label>
        <button
          type="submit"
          disabled={isPending}
          className="w-[150px] bg-[#5865F2] text-white p-2 rounded-full"
        >
          {isPending ? "送信中..." : "送信"}
        </button>
        {state.success && <p className="text-lg">{state.message}</p>}
      </form>
    </section>
  );
};
