export default function AccessPage() {
  return (
    <div className="w-full space-y-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold tracking-[0.3em] text-amber-300">
          ACCESS
        </p>
        <h1 className="text-2xl font-semibold text-zinc-50 sm:text-3xl">
          アクセス
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-zinc-300">
          中華料理 華福菜館は、新横浜駅から徒歩3分の駅近ロケーション。
          横浜アリーナからも徒歩1分で、お仕事帰りやイベント前後にも立ち寄りやすい立地です。
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4 rounded-2xl border border-zinc-800 bg-black/60 p-5 shadow-md shadow-black/50">
          <h2 className="text-sm font-semibold text-zinc-50">店舗情報</h2>
          <dl className="grid grid-cols-[90px_1fr] gap-x-4 gap-y-2 text-xs text-zinc-200">
            <dt className="text-zinc-400">店名</dt>
            <dd>中華料理 華福菜館（ちゅうかりょうりはなふくさいかん）</dd>
            <dt className="text-zinc-400">住所</dt>
            <dd>
              〒222-0033 神奈川県横浜市港北区新横浜3-9-5 新横浜第3東昇ビルB1F
            </dd>
            <dt className="text-zinc-400">最寄り駅</dt>
            <dd>「新横浜駅」北口より徒歩3分</dd>
            <dt className="text-zinc-400">電話番号</dt>
            <dd>045-577-9344</dd>
            <dt className="text-zinc-400">営業時間</dt>
            <dd>
              ランチ 11:00〜15:00
              <br />
              ディナー 17:00〜23:00
            </dd>
            <dt className="text-zinc-400">定休日</dt>
            <dd>なし</dd>
            <dt className="text-zinc-400">座席数</dt>
            <dd>テーブル 32席 / カウンター 6席 / 半個室 2室</dd>
            <dt className="text-zinc-400">駐車場</dt>
            <dd>近隣にコインパーキングあり</dd>
          </dl>
        </div>

        <div className="space-y-4 rounded-2xl border border-zinc-800 bg-black/60 p-5 shadow-md shadow-black/50">
          <h2 className="text-sm font-semibold text-zinc-50">アクセス方法</h2>
          <ul className="space-y-2 text-xs leading-relaxed text-zinc-200">
            <li>
              ・「新横浜駅」北口改札を出て、ロータリーを右方向へお進みください。
            </li>
            <li>
              ・2つ目の信号を左折し、直進していただくと右手に看板が見えてきます。
            </li>
            <li>
              ・お車でお越しの際は、近隣のコインパーキングをご利用ください。
            </li>
          </ul>
          <p className="mt-2 text-[11px] text-zinc-400">
            ※Google マップを掲載する場合は、下の案内に沿って &lt;iframe&gt; を追加してください。
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-zinc-800 bg-black/50 p-4 text-center text-xs text-zinc-300">
        <p>
          Google マップの埋め込みコードをお持ちの場合は、こちらのセクションに
          &lt;iframe&gt; を追加してご利用ください。
        </p>
      </section>
    </div>
  );
}

