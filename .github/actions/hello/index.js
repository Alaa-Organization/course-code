/*-------------------------------------------------------
https://github.com/actions/toolkit
npm i @actions/core @actions/github
--------------------------------------------------------*/
const core = require("@actions/core");
/* core does not exist inside the runner & we don't want to push node_modules
  so we have to compile the requirements in a file
  using https://github.com/vercel/ncc
  with npm i -g @vercel/ncc
  then ncc build input.js -o dist
  .. navigate to hello in terminal
  .. ncc build index.js
*/
const github = require("@actions/github");

try {
  core.debug("Debug Message");
  core.warning("Warning Message");
  core.error("Error Message");

  // get input from js-custom-actions.yaml
  const name = core.getInput("who_to_greet");
  console.log(`Hello ${name}`);

  // get output from js-custom-actions.yaml
  const time = new Date();
  core.setOutput("time", time.toTimeString());

  core.exportVariable("HELLO_TIME", time);

  core.startGroup("Logging github context");
  console.log(JSON.stringify(github.context, null, 2));
  core.endGroup();
} catch (error) {
  core.setFailed(error.message);
}
