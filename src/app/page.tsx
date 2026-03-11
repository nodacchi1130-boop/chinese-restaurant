import Link from "next/link";

export default function Home() {
  return (
    <div className="flex w-full flex-col gap-10">
      <section className="relative overflow-hidden rounded-3xl border border-red-500/40 bg-gradient-to-br from-red-900/70 via-zinc-950 to-black px-6 py-10 shadow-[0_25px_80px_rgba(0,0,0,0.7)] sm:px-10 sm:py-14">
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-red-500/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl" />

        <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-6">
            <p className="inline-flex rounded-full border border-amber-400/40 bg-black/50 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-amber-200">
              本格中華 × 落ち着いた空間
            </p>
            <h1 className="text-balance text-3xl font-semibold leading-tight text-zinc-50 sm:text-4xl md:text-5xl">
              香り立つ湯気と炎。
              <br />
              五感で味わう<span className="text-amber-300"> 本格中華。</span>
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-zinc-300 sm:text-base">
              中華料理 龍華は、旬の食材と本場の技法にこだわった街の隠れ家中華。
              ご家族でのお食事からご宴会、記念日ディナーまで、心を込めておもてなしいたします。
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/reservation"
                className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-2.5 text-sm font-semibold text-black shadow-lg shadow-amber-500/40 transition hover:bg-amber-300"
              >
                予約する
              </Link>
              <Link
                href="/menu"
                className="inline-flex items-center justify-center rounded-full border border-zinc-600 px-6 py-2.5 text-sm font-semibold text-zinc-100 transition hover:border-amber-300 hover:text-amber-200"
              >
                メニューを見る
              </Link>
            </div>
            <div className="mt-4 flex flex-col gap-2 text-xs text-zinc-300 sm:flex-row sm:items-center sm:gap-6">
              <p>
                営業時間：11:00〜15:00 / 17:00〜23:00
              </p>
              <p>定休日：なし</p>
            </div>
          </div>

          <div className="flex-1">
            <div className="mx-auto h-60 w-full max-w-sm rounded-[2rem] border border-red-500/40 bg-gradient-to-tr from-black via-red-950 to-black p-3 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
              <div className="flex h-full flex-col justify-between rounded-[1.5rem] bg-gradient-to-br from-zinc-950 via-red-950/70 to-black p-5">
                <div className="flex items-baseline justify-between text-xs text-zinc-300">
                  <span className="font-semibold text-amber-200">
                    本日のおすすめ
                  </span>
                  <span>Chef&apos;s Special</span>
                </div>
                <div className="space-y-3">
                  <p className="text-lg font-semibold text-zinc-50">
                    四川麻婆豆腐
                  </p>
                  <p className="text-xs leading-relaxed text-zinc-300">
                    花椒の香りと旨辛な自家製辣油で仕上げる、龍華自慢の一品。
                    辛さの調整も承ります。
                  </p>
                </div>
                <div className="flex items-center justify-between text-xs text-zinc-300">
                  <p>ランチセット 1,280円（税込）〜</p>
                  <p className="rounded-full bg-black/40 px-3 py-1 text-[11px]">
                    テイクアウト可
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        <div className="rounded-2xl border border-zinc-800 bg-black/60 p-5 shadow-md shadow-black/40">
          <p className="text-xs font-semibold tracking-[0.25em] text-amber-300">
            POINT 01
          </p>
          <h2 className="mt-2 text-base font-semibold text-zinc-50">
            本場仕込みのシェフ
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-300">
            中国本土の有名店で腕を磨いたシェフが、素材の持ち味を最大限に生かした本格中華をご提供します。
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-800 bg-black/60 p-5 shadow-md shadow-black/40">
          <p className="text-xs font-semibold tracking-[0.25em] text-amber-300">
            POINT 02
          </p>
          <h2 className="mt-2 text-base font-semibold text-zinc-50">
            落ち着いた空間
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-300">
            ダークトーンを基調とした店内は、デートや会食、接待にもおすすめ。半個室席もご用意しております。
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-800 bg-black/60 p-5 shadow-md shadow-black/40">
          <p className="text-xs font-semibold tracking-[0.25em] text-amber-300">
            POINT 03
          </p>
          <h2 className="mt-2 text-base font-semibold text-zinc-50">
            駅近でアクセス良好
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-300">
            〇〇駅から徒歩3分。専用駐車場も完備しているため、お車でのご来店も安心です。
          </p>
        </div>
      </section>
    </div>
  );
}
