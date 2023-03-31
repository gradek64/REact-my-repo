import React from 'react';

// Gets all the chunked JS files as well as the base 'client' file. 'client'
// must be the last thing loaded as it depends on the prev files.
export const getJsFiles = (modules = []) => {
  const files = [];

  console.log('chunk modules:::', modules);
  [...modules, 'bundle'].forEach((module) => {
    files.push(
      `${
        module === 'bundle'
          ? //this is being served from dev-server from src/bundle.js and src/chunk-file.js , those files are invisible in dev-server mode
            '/bundle'
          : `/chunk-${module}`
      }.js`
    );
  });
  return (
    <>
      {files.map((file) => (
        <script
          key={file}
          type='text/javascript'
          defer
          charSet='UTF-8'
          src={file}
        />
      ))}
    </>
  );
};
