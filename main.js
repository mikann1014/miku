const { Player } = TextAliveApp;

const player = new Player({
  app: { token: "IjYiNGcrw0EWxRDc" },
  mediaElement: document.body
});

player.addListener({
  onAppReady: (app) => {
    console.log("アプリが正常に認証されました！");
    // 楽曲URLを指定せずに、公式のテスト用IDを使ってみる
    player.createFromSongUrl("https://piapro.jp/t/NIn1/20210204221904"); 
  },
  onVideoReady: () => {
    console.log("ビデオの準備ができました。画面をクリックして再生してください。");
  },
  onAppError: (e) => {
    console.error("TextAliveエラー詳細:", e);
  }
});
