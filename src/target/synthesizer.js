var Tuner = /** @class */ (function () {
    function Tuner(gain, play) {
        this.audioCtx = new AudioContext();
        this.gainNode = new GainNode(context, { gain: Number(gain.value) });
        console.log("Tuner was created");
        play.addEventListener("click", function () {
            console.log(gain.value);
        });
    }
    Tuner.prototype.captureMic = function () {
        console.log("captureMic()");
        return navigator.mediaDevices.getUserMedia({
            audio: {
                echoCancellation: false,
                autoGainControl: false,
                noiseSuppression: false,
                latency: 0
            },
            video: false
        }).then(function (stream) {
            console.log(stream);
        })["catch"](console.error);
    };
    return Tuner;
}());
var context = new AudioContext();
var analyser = new AnalyserNode(context, { fftSize: 256 });
