const box = document.querySelector(".box");

const player = new TextAliveApp.Player({
  app: { token: "IjYiNGcrw0EWxRDc" }
});

player.addListener({
  onAppReady: () => {
    // 確実に動く曲
    player.createFromSongUrl("https://piapro.jp/t/6K1r/20230120170000");
  },

  onTimeUpdate: (position) => {
    const beat = (position % 500) / 500;

    const step = Math.floor(beat * 2);
    const x = step * 60;

    box.style.transform = `translate(${x}px, -50%)`;
  }
});
