//* Function that load scripts from compiled typescript folder
function loadScripts() {
  console.warn("LOADING SCRIPTS FROM 'scripts/target/*.js'")
  
  const directory = 'src-/target/';
  const extension = '.js';

  const files = ['synthesizer'];
  
  for (let file of files) {
    const path = directory + file + extension;
    const script = document.createElement("script");
    script.src = path;
    document.body.appendChild(script);
  }
}

loadScripts();
