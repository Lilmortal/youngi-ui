#!/usr/bin/env node

const { readdirSync, statSync } = require("fs");
const { join } = require("path");

const directoriesPath = [
  join(__dirname, "../src/components"),
  join(__dirname, "../src/containers"),
];

const i18nFiles = [];
const hasi18nFile = (path) => {
  if (statSync(path).isDirectory()) {
    console.log(path);
    readdirSync(path, (err, files) => {
      console.log(err, files);
      hasi18nFile(files);
    });
  }

  //   console.log(path);

  // i18nFiles.push()
};

directoriesPath.forEach((directory) => {
  hasi18nFile(directory);
});
