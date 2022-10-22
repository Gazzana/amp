//* Function that load scripts from compiled typescript folder
//* Called by the body element when loaded
function loadScripts() {
  const files = ['synthesizer'];
  console.info("LOADING SCRIPTS FROM 'scripts/target/" + files + ".js")

  const directory = 'src/target/';
  const extension = '.js';

  for (let file of files) {
    const path = directory + file + extension;
    const script = document.createElement("script");
    script.src = path;
    document.body.appendChild(script);
  }
}

//* Initializing variables for each slider
const gain = document.getElementById("gain");
const play = document.getElementById("start");

function createTuner() {
  let instance = new Tuner(gain, play);
  console.log("TUNER WAS CREATED")
  //* Calling the synthesizer class when button is loaded
  return instance;
}

function setupTuner() {

}

//* Start audio stream
function startStream() {
  const tuner = createTuner();
  tuner.createMic();
}
