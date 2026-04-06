const box = document.querySelector(".box");

// ★ 自分のトークンに変える
const player = new TextAliveApp.Player({
  app: { token: "IjYiNGcrw0EWxRDc" }
});

player.addListener({
  onAppReady: () => {
    // ★ 曲URL（あとで変えてOK）
    player.createFromSongUrl("https://piapro.jp/t/B3yJ");
  },

  onTimeUpdate: (position) => {
    // 0〜1の拍
    const beat = (position % 500) / 500;

    // カクカク歩き
    const step = Math.floor(beat * 2);
    const x = step * 40;

    box.style.transform =
      `translate(${x}px, -50%)`;
  }
});


const box = document.querySelector(".box");

const player = new TextAliveApp.Player({
  app: { token: "IjYiNGcrw0EWxRDc" }
});

player.addListener({
  onAppReady: () => {
    // とりあえず公式デモ曲（確実に動くやつ）
    player.createFromSongUrl("https://piapro.jp/t/6K1r/20230120170000");
  },

  onTimeUpdate: (position) => {
    // ★ ここが超重要
    // 0〜1の拍っぽい値
    const beat = (position % 500) / 500;

    // カクカク2歩
    const step = Math.floor(beat * 2);

    const x = step * 60;

    // ★ translateYを残すの忘れがち
    box.style.transform = `translate(${x}px, -50%)`;
  }
});
