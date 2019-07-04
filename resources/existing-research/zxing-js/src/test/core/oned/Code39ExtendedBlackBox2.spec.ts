
/*
 * Copyright 2008 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// package com.google.zxing.oned;

import BarcodeFormat from './../../../core/BarcodeFormat';
import AbstractBlackBoxSpec from './../common/AbstractBlackBox';
import Code39Reader from '../../../core/oned/Code39Reader';

/**
 * @author Sean Owen
 */
class Code39ExtendedBlackBox2Spec extends AbstractBlackBoxSpec {
    public constructor() {
        super('src/test/resources/blackbox/code39-2', new Code39Reader(false, true), BarcodeFormat.CODE_39);
        this.addTest(2, 2, 0.0);
        this.addTest(2, 2, 180.0);
    }
}

describe('Code39ExtendedBlackBox.2', () => {
    it('testBlackBox', done => {
        const test = new Code39ExtendedBlackBox2Spec();
        return test.testBlackBox(done);
    });
});
