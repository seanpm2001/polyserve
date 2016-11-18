/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

import * as path from 'path';
import {bowerConfig} from '../bower_config';
import {assert} from 'chai';

suite('bowerConfig', () => {

  test('reads bower.json', () => {
    let config = bowerConfig(path.join(__dirname, '..', '..', 'test'));
    assert.equal(config.name, 'polyserve-test');
  });

});