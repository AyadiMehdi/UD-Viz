"use strict";

require("core-js/modules/es.promise.js");

var _index = require("../../src/index");

const assert = require('assert');

describe('effects_split', function _() {
  it('should run', async () => {
    assert.ok(1 + 1 == 2);
    const v = new _index.View3D();
  });
});