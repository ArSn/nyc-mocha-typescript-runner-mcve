"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var assert_1 = __importDefault(require("assert"));
var mocha_1 = require("mocha");
var scan_1 = require("../lib/scan");
mocha_1.describe('scan', function () {
    mocha_1.it('does scanny stuff', function () {
        assert_1["default"].ok(42 === 42, 'The answer to life, the universe and everything.');
        // toggle comment the two below lines to see change in code coverage
        assert_1["default"].ok(true === scan_1.doScannyStuff(), 'Scanny stuff is doing it.');
        // assert.ok(false === doOtherStuff(), 'Other stuff is doing it as well.');
    });
});
//# sourceMappingURL=scan-test.js.map