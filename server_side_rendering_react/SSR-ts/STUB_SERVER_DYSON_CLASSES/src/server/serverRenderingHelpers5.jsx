import React from "react";

// Gets all the chunked JS files as well as the base 'client' file. 'client'
// must be the last thing loaded as it depends on the prev files.

//type ScriptTagKeys = Partial<HTMLScriptElement>;

//this file needs to be .tsx not ts cause it return html element 


export const getJsFiles = (modules = []) => {
  let files = [];

  // console.log("chunk modules:::", modules);
  [...modules, "bundle"].forEach((module) => {
    files.push(
      `${module === "bundle"
        ? //client/bundle.js' has to match output: { ...,filename: "client/bundle.js",} for dev server development
        "/client/bundle"
        : `/client/chunk-${module}`
      }.js`
    );
  });
  return files.map((file) =>
    <script src={file} type='text/javascript' defer charSet='utf-8'></script>)
}
