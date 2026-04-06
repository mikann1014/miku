const { Player } = TextAliveApp;

// UI要素の取得
const statusText = document.querySelector("#status");
const playBtn = document.querySelector("#play");
const mikuIcon = document.querySelector(".miku-icon");

const player = new Player({
  app: { token: "YQvbCkCcJ1q18kkh" }, // お持ちのトークン
  mediaAutoplay: false,
  mediaElement: document.body 
});

player.addListener({
  onAppReady: (app) => {
    if (!app.managed) {
      // 「世界最後の音楽隊」のURLを指定（ピアプロ公式等）
      player.createFromSongUrl("https://piapro.jp/t/B3yJ/20251215061727");
    }
  },

  onVideoReady: () => {
    statusText.textContent = "準備完了！";
    playBtn.style.display = "block";
    
    playBtn.onclick = () => {
      player.requestPlay();
      playBtn.style.display = "none";
    };
  },

  // 1秒間に何度も呼ばれる同期処理
  onTimeUpdate: (position) => {
    // 拍（Beat）情報を取得する
    const beat = player.findBeat(position);
    if (!beat) return;

    // 拍の進捗（0〜1）に合わせてアイコンを少し弾ませる
    // beat.progress は 0(拍の頭) から 1(次の拍の直前) まで変化します
    const bounce = Math.sin(beat.progress * Math.PI) * 20;
    
    // 歌詞の進捗に合わせて横に動かす（例：再生位置を100で割った分だけ右へ）
    const x = position / 100; 

    mikuIcon.style.transform = `translate(${x}px, calc(-50% - ${bounce}px))`;
  },

  onThrottled: (delay) => {
    console.warn("通信制限中... " + delay + "ms 待機");
  }
});
