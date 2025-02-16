'use client';

import { useActionState } from 'react';
import { ActionResponse } from './types';
import { postContent } from './postContent';

const initialState: ActionResponse = {
  success: false,
  message: [''],
};

export const ContactForm = () => {
  const [state, action, isPending] = useActionState(postContent, initialState);

  return (
    <form action={action} className="relative grid max-w-[480px] gap-7">
      <label htmlFor="name" className="block space-y-1">
        お名前<span className="ml-2 text-sm text-[#F45554]">*必須</span>
        <input
          type="text"
          name="name"
          defaultValue={state.inputs?.name}
          required
          className="w-full rounded-md bg-slate-200 p-2 leading-6"
        />
        {state?.errors?.name && (
          <p id="streetAddress-error" className="text-sm text-red-500">
            {state.errors.name[0]}
          </p>
        )}
      </label>
      <label htmlFor="email" className="block space-y-1">
        メールアドレス
        <span className="ml-2 text-sm text-[#F45554]">*必須</span>
        <input
          type="email"
          name="email"
          defaultValue={state.inputs?.email}
          required
          className="w-full rounded-md bg-slate-200 p-2 leading-6"
        />
        {state?.errors?.email && (
          <p id="streetAddress-error" className="text-sm text-red-500">
            {state.errors.email[0]}
          </p>
        )}
      </label>
      <label htmlFor="contents" className="block space-y-1">
        お問い合わせ内容
        <span className="ml-2 text-sm text-[#F45554]">*必須</span>
        <textarea
          name="contents"
          defaultValue={state.inputs?.contents}
          required
          className="min-h-[250px] w-full rounded-md bg-slate-200 p-2 leading-6"
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
        className="w-[150px] cursor-pointer rounded-full bg-[#5865F2] p-2 text-white"
      >
        {isPending ? '送信中...' : '送信'}
      </button>
      {state.message && <p className="text-lg">{state.message}</p>}
    </form>
  );
};
