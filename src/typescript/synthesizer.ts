class Tuner {
	audioCtx: AudioContext;
	gainNode: GainNode;

	constructor(gain: HTMLInputElement, play: HTMLButtonElement) {
		this.audioCtx = new AudioContext()
		this.gainNode = new GainNode(context, { gain: Number(gain.value) })

		console.log("Tuner was created");
		play.addEventListener("click", () => {
			console.log(gain.value)
		})
	}

	captureMic() {
		console.log("captureMic()")
		return navigator.mediaDevices.getUserMedia({
			audio: {
				echoCancellation: false,
				autoGainControl: false,
				noiseSuppression: false,
				latency: 0
			},
			video: false
		}).then(stream => {
			console.log(stream)
		}).catch(console.error)
	}
}

const context = new AudioContext();
const analyser = new AnalyserNode(context, { fftSize: 256 })