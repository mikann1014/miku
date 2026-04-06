const box = document.querySelector(".box");

// ★ 自分のトークンに変える
const player = new TextAliveApp.Player({
  app: { token: "YOUR_API_TOKEN" }
});

player.addListener({
  onAppReady: () => {
    // ★ 曲URL（あとで変えてOK）
    player.createFromSongUrl("https://piapro.jp/t/XXXX");
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
