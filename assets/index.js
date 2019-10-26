import MediaPlayer from "./MediaPLayer.js";
import AutoPlay from "./plugins/AutoPlay.js";

const video = document.querySelector("video");
const button = document.querySelector("button");
const btnMute = document.getElementById("muteButton");
const player = new MediaPlayer({
  el: video,
  plugins: []
  // [new AutoPlay()]
});

button.onclick = () => player.toogle();
btnMute.onclick = () => player.toogleMute();
