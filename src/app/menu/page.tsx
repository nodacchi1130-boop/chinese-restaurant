const menuSections = [
  {
    title: "おすすめ",
    description: "初めての方におすすめの定番人気メニューです。",
    items: [
      {
        name: "四川麻婆豆腐",
        description: "山椒の香りが広がる、ピリ辛でコク深い本格麻婆豆腐。",
        price: "1,380円",
      },
      {
        name: "黒酢酢豚",
        description: "まろやかな黒酢ソースで仕上げた、外はカリッと中はジューシーな酢豚。",
        price: "1,480円",
      },
      {
        name: "海老のチリソース",
        description: "プリプリの海老を自家製のチリソースでからめた人気の一品。",
        price: "1,580円",
      },
    ],
  },
  {
    title: "麺・ご飯",
    description: "ランチにもディナーにも満足のボリューム。",
    items: [
      {
        name: "坦々麺",
        description: "胡麻の香りと辛味のバランスが絶妙な看板メニュー。",
        price: "1,150円",
      },
      {
        name: "五目あんかけ焼きそば",
        description: "香ばしく焼き上げた麺にたっぷりの具材とあんをかけました。",
        price: "1,280円",
      },
      {
        name: "福建チャーハン",
        description: "ふんわりチャーハンに海鮮あんをとろりとかけた贅沢な一皿。",
        price: "1,350円",
      },
    ],
  },
  {
    title: "コース",
    description: "ご宴会や記念日に最適なコースプランをご用意しております。",
    items: [
      {
        name: "龍華スタンダードコース",
        description: "前菜・点心・海鮮・肉料理・麺・デザート 全8品。",
        price: "お一人様 4,500円〜",
      },
      {
        name: "飲み放題付きコース",
        description: "2時間飲み放題付きのお得なコース。大人数のご宴会におすすめです。",
        price: "お一人様 6,000円〜",
      },
    ],
  },
];

export default function MenuPage() {
  return (
    <div className="w-full space-y-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold tracking-[0.3em] text-amber-300">
          MENU
        </p>
        <h1 className="text-2xl font-semibold text-zinc-50 sm:text-3xl">
          メニュー
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-zinc-300">
          旬の食材と本場の調味料を使用し、一品一品丁寧に仕上げています。
          表示価格はすべて税込みです。仕入れ状況により内容が変わる場合がございます。
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-2">
        {menuSections.map((section) => (
          <section
            key={section.title}
            className="flex flex-col gap-4 rounded-2xl border border-zinc-800 bg-black/60 p-5 shadow-md shadow-black/50"
          >
            <div>
              <h2 className="text-lg font-semibold text-zinc-50">
                {section.title}
              </h2>
              <p className="mt-1 text-xs text-zinc-300">
                {section.description}
              </p>
            </div>
            <ul className="space-y-4">
              {section.items.map((item) => (
                <li key={item.name} className="border-t border-zinc-800 pt-3">
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="text-sm font-semibold text-zinc-50">
                      {item.name}
                    </p>
                    <p className="text-xs font-semibold text-amber-200">
                      {item.price}
                    </p>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-300">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section className="rounded-2xl border border-red-500/40 bg-red-900/20 px-5 py-4 text-xs text-zinc-100">
        <p className="font-semibold text-amber-200">アレルギー情報について</p>
        <p className="mt-1 text-[11px] leading-relaxed text-zinc-200">
          アレルギーをお持ちのお客様は、ご予約時またはご来店時にスタッフまでお知らせください。
          可能な範囲でメニュー内容の調整を承ります。
        </p>
      </section>
    </div>
  );
}

