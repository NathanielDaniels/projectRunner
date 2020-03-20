#!/usr/bin/env node

const caporal = require("caporal");
const debounce = require("lodash.debounce");
const chokidar = require("chokidar");

const start = debounce(() => {
  console.log("STARTING USERS PROGRAM");
}, 100);

chokidar
  .watch(".")
  .on("add", start)
  .on("change", () => {
    console.log("file changed");
  })
  .on("unlink", () => {
    console.log("file Unlinked");
  });

// console.log("changed");
