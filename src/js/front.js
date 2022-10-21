//* Function that load scripts from compiled typescript folder
//* Called by the body element when loaded
function loadScripts() {
  const files = ['synthesizer'];
  console.warn("LOADING SCRIPTS FROM 'scripts/target/" + files + ".js")

  const directory = 'src/target/';
  const extension = '.js';


  for (let file of files) {
    const path = directory + file + extension;
    const script = document.createElement("script");
    script.src = path;
    document.body.appendChild(script);
  }
}