class Tuner {
	gain: HTMLInputElement;

	constructor() {
		const gainNode = new GainNode(context, { gain: Number(this.gain.value) })

	}
}

const context = new AudioContext();
const analyser = new AnalyserNode(context, { fftSize: 256 })