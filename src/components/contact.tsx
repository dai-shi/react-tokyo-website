"use client";

import { useState } from "react";
import { useRouter_UNSTABLE as useRouter } from "waku";

export const Contact = () => {
  const [pending, setPending] = useState(false);
  const router = useRouter();

  return (
    <section id="section" className="space-y-4 lg:space-y-8">
      <h2 className="text-3xl font-bold">Contact</h2>
      <form
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdjJ7qNPsLRccNZ2khhCAltpCGdAnCjlb80GrxoIgSsElhS-w/formResponse"
        name="contactForm"
        id="contactForm"
        className="grid gap-8 max-w-[480px]"
        method="POST"
        target="#contactForm"
        onSubmit={(e) => {
          e.currentTarget.reset();
        }}
      >
        <label htmlFor="name" className="block space-y-1">
          お名前<span className="text-[#F45554] text-sm ml-2">*必須</span>
          <input
            type="text"
            name="entry.876026217"
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
            name="entry.19281496"
            id="email"
            className="bg-slate-200 w-full rounded-md leading-6 p-2"
            required
          />
        </label>
        <label htmlFor="contents" className="block space-y-1">
          お問い合わせ内容
          <span className="text-[#F45554] text-sm ml-2">*必須</span>
          <textarea
            name="entry.1625767701"
            id="contents"
            className="bg-slate-200 w-full rounded-md leading-6 p-2 min-h-[250px]"
            required
          ></textarea>
        </label>
        <button
          type="submit"
          disabled={pending}
          className="w-[150px] bg-[#5865F2] text-white p-2 rounded-full"
        >
          送信
        </button>
      </form>
      <iframe name="hidden_iframe" className="hidden"></iframe>
    </section>
  );
};
