#!/usr/bin/env node

const { readdirSync, statSync, writeFile } = require("fs");
const { join } = require("path");

const directoriesPath = [
  join(__dirname, "../src/commons"),
  join(__dirname, "../src/containers"),
];

const localeContents = {};
const hasi18nFile = (path) => {
  if (statSync(path).isDirectory()) {
    readdirSync(path).forEach((files) => {
      hasi18nFile(`${path}/${files}`);
    });
  }

  if (statSync(path).isFile() && path.endsWith("i18n.json")) {
    const data = require(path);
    Object.entries(data).forEach(([id, messages]) => {
      Object.entries(messages).forEach(([locale, message]) => {
        localeContents[locale] = { ...localeContents[locale], [id]: message };
      });
    });
  }

  const fileNameDir = `src/locales/translations`;

  Object.entries(localeContents).forEach(([locale, content]) => {
    writeFile(
      `${fileNameDir}/${locale}.json`,
      JSON.stringify(content),
      (err) => {
        if (err) {
          console.log(err);
        }
      }
    );
  });
};

directoriesPath.forEach((directory) => {
  hasi18nFile(directory);
});
