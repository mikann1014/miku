const { Player } = TextAliveApp;

const player = new Player({
  app: { token: "IjYiNGcrw0EWxRDc" },
  mediaElement: document.body // 自動で再生プレイヤーを作る
});

player.addListener({
  onAppReady: (app) => {
    console.log("App Ready!"); // ログ1
    player.createFromSongUrl("https://piapro.jp/t/6K1r/20230120170000");
  },

  onVideoReady: () => {
    console.log("Video Ready!"); // ログ2
    document.querySelector("#status").textContent = "準備完了！";
  },

  onTimerReady: () => {
    console.log("Timer Ready!"); // ログ3
  },

  // 読み込みエラーが発生した時に教えてくれる
  onThrottled: (delay) => {
    console.warn("通信制限中... " + delay + "ms 待機");
  }
});
