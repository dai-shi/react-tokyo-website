"use client";

import { postContent } from "./postContent";

export const Contact = () => {
  return (
    <section id="section" className="space-y-4 lg:space-y-8">
      <h2 className="text-3xl font-bold">Contact</h2>
      <form action={postContent} className="grid gap-7 max-w-[480px] relative">
        <label htmlFor="name" className="block space-y-1">
          お名前<span className="text-[#F45554] text-sm ml-2">*必須</span>
          <input
            type="text"
            name="name"
            id="name"
            className="bg-slate-200 w-full rounded-md leading-6 p-2"
            required
          />
        </label>
        <label htmlFor="email" className="block space-y-1">
          メールアドレス
          <span className="text-[#F45554] text-sm ml-2">*必須</span>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-slate-200 w-full rounded-md leading-6 p-2"
            required
          />
        </label>
        <label htmlFor="contents" className="block space-y-1">
          お問い合わせ内容
          <span className="text-[#F45554] text-sm ml-2">*必須</span>
          <textarea
            name="contents"
            className="bg-slate-200 w-full rounded-md leading-6 p-2 min-h-[250px]"
            required
          ></textarea>
        </label>
        <button
          type="submit"
          className="w-[150px] bg-[#5865F2] text-white p-2 rounded-full"
        >
          送信
        </button>
      </form>
    </section>
  );
};
