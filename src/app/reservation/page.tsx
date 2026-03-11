"use client";

import { FormEvent, useState } from "react";

export default function ReservationPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [finished, setFinished] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    // 実際の運用ではここで API 経由でメール送信や予約管理システムとの連携を行います。
    setTimeout(() => {
      setIsSubmitting(false);
      setFinished(true);
    }, 900);
  };

  return (
    <div className="w-full space-y-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold tracking-[0.3em] text-amber-300">
          RESERVATION
        </p>
        <h1 className="text-2xl font-semibold text-zinc-50 sm:text-3xl">
          予約フォーム
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-zinc-300">
          ご予約は下記フォーム、またはお電話（045-577-9344）にて承っております。
          フォームからのご予約は送信完了後、店舗からの折り返し連絡をもって確定となります。
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-zinc-800 bg-black/60 p-5 shadow-md shadow-black/50"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-zinc-200">
                お名前 <span className="text-red-400">*</span>
              </label>
              <input
                required
                name="name"
                className="w-full rounded-lg border border-zinc-700 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none ring-0 transition focus:border-amber-300 focus:bg-black/60"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-zinc-200">
                フリガナ
              </label>
              <input
                name="furigana"
                className="w-full rounded-lg border border-zinc-700 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none ring-0 transition focus:border-amber-300 focus:bg-black/60"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-zinc-200">
                電話番号 <span className="text-red-400">*</span>
              </label>
              <input
                required
                name="phone"
                type="tel"
                className="w-full rounded-lg border border-zinc-700 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none ring-0 transition focus:border-amber-300 focus:bg-black/60"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-zinc-200">
                メールアドレス
              </label>
              <input
                name="email"
                type="email"
                className="w-full rounded-lg border border-zinc-700 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none ring-0 transition focus:border-amber-300 focus:bg-black/60"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-zinc-200">
                ご来店日 <span className="text-red-400">*</span>
              </label>
              <input
                required
                name="date"
                type="date"
                className="w-full rounded-lg border border-zinc-700 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none ring-0 transition focus:border-amber-300 focus:bg-black/60"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-zinc-200">
                ご来店時間 <span className="text-red-400">*</span>
              </label>
              <input
                required
                name="time"
                type="time"
                className="w-full rounded-lg border border-zinc-700 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none ring-0 transition focus:border-amber-300 focus:bg-black/60"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-zinc-200">
                人数 <span className="text-red-400">*</span>
              </label>
              <input
                required
                name="people"
                type="number"
                min={1}
                max={20}
                className="w-full rounded-lg border border-zinc-700 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none ring-0 transition focus:border-amber-300 focus:bg-black/60"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-zinc-200">
                ご利用用途
              </label>
              <select
                name="purpose"
                className="w-full rounded-lg border border-zinc-700 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none ring-0 transition focus:border-amber-300 focus:bg-black/60"
                defaultValue=""
              >
                <option value="" className="bg-black">
                  選択してください
                </option>
                <option value="dinner" className="bg-black">
                  ご夕食
                </option>
                <option value="party" className="bg-black">
                  ご宴会・飲み会
                </option>
                <option value="anniversary" className="bg-black">
                  記念日・お祝い
                </option>
                <option value="other" className="bg-black">
                  その他
                </option>
              </select>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-zinc-200">
              ご要望・ご質問
            </label>
            <textarea
              name="message"
              rows={4}
              className="w-full resize-none rounded-lg border border-zinc-700 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none ring-0 transition focus:border-amber-300 focus:bg-black/60"
              placeholder="アレルギーやお子様連れ、コース内容のご希望などがあればご記入ください。"
            />
          </div>

          <p className="text-[11px] leading-relaxed text-zinc-400">
            ※ 当日のご予約や10名様以上でのご利用は、お手数ですがお電話にてお問い合わせください。
          </p>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-full items-center justify-center rounded-full bg-amber-400 px-6 py-2.5 text-sm font-semibold text-black shadow-lg shadow-amber-500/40 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "送信中..." : "入力内容を送信する"}
          </button>

          {finished && (
            <p className="text-[11px] text-emerald-300">
              送信が完了しました。後ほどスタッフより確認のご連絡を差し上げます。
            </p>
          )}
        </form>

        <aside className="space-y-4 rounded-2xl border border-zinc-800 bg-black/60 p-5 text-xs text-zinc-200 shadow-md shadow-black/50">
          <h2 className="text-sm font-semibold text-zinc-50">ご予約に関するご案内</h2>
          <ul className="space-y-2 leading-relaxed">
            <li>・キャンセルや人数変更は、前日までにご連絡をお願いいたします。</li>
            <li>・アレルギーや苦手な食材がある場合は、事前にお知らせください。</li>
            <li>
              ・記念日利用でメッセージプレートをご希望の場合は、その旨とメッセージ内容をご記入ください。
            </li>
          </ul>
          <div className="mt-3 rounded-xl border border-amber-500/40 bg-amber-500/5 p-3 text-[11px] text-amber-100">
            <p className="font-semibold">お電話でのご予約</p>
            <p className="mt-1">
              045-577-9344（11:00〜15:00 / 17:00〜23:00）
              <br />
              「ホームページを見た」とお伝えいただくとスムーズです。
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}

