const { Player } = TextAliveApp; // APIの読み込み
const box = document.querySelector(".box");
const playBtn = document.querySelector("#play");
const statusText = document.querySelector("#status");

const player = new Player({
  app: { token: "IjYiNGcrw0EWxRDc" }, // 自分のトークンに差し替えてください
  mediaElement: document.querySelector("#media") // 音声再生用（自動生成されます）
});

player.addListener({
  // アプリの準備ができたら楽曲を読み込む
  onAppReady: (app) => {
    if (!app.songUrl) {
      player.createFromSongUrl("https://piapro.jp/t/6K1r/20230120170000");
    }
  },

  // 楽曲の読み込みが終わったらボタンを押せるようにする
  onVideoReady: () => {
    statusText.textContent = "準備完了！ボタンを押してね";
    playBtn.addEventListener("click", () => {
      player.requestPlay(); // 再生開始！
      playBtn.style.display = "none"; // ボタンを隠す
    });
  },

  // 再生中に呼ばれる
  onTimeUpdate: (position) => {
    // 0.5秒(500ms)ごとにステップ移動する計算
    const beat = (position % 500) / 500;
    const step = Math.floor(beat * 2);
    const x = step * 60;

    box.style.transform = `translate(${x}px, -50%)`;
  }
});
