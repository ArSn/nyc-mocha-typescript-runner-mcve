require("ts-node/register/transpile-only");
require("source-map-support/register");
const Mocha = require('mocha');


const mocha = new Mocha();

mocha.addFile("tests/scan-test.ts");

mocha.run();

