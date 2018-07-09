window.AudioContext = AudioContext || webkitAudioContext || mozAudioContext || msAudioContext;
if(!window.AudioContext) throw 'browser unsuport audio context';

if(!navigator.mediaDevices.getUserMedia) throw 'browser upsuport getUserMedia';

navigator.mediaDevices.getUserMedia({audio: true})
.then(stream => {
  // var context = new AudioContext();
  // var sourceNode = context.createMediaStreamSource(stream);
  // var analyserNode = context.createAnalyser();
  // sourceNode.connect(analyserNode);
  // analyserNode.connect(context.destination);
  // var timer = setInterval(() => {
  //   var len = analyserNode.frequencyBinCount;
  //   var array = new Uint8Array(len);
  //   analyserNode.getByteFrequencyData(array);
  //   console.log(array);
  // }, 500)
  // btnStop.onclick = function() {
  //   clearInterval(timer);
  // }

  audio.srcObject = stream;
})