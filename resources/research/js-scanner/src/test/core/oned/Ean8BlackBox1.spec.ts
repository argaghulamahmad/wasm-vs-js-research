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

import BarcodeFormat from '../../../core/BarcodeFormat';
import MultiFormatReader from '../../../core/MultiFormatReader';
import AbstractBlackBoxSpec from '../common/AbstractBlackBox';

/**
 * @author Sean Owen
 */
class Ean8BlackBox1Spec extends AbstractBlackBoxSpec {

    public constructor() {
        super('src/test/resources/blackbox/ean8-1', new MultiFormatReader(), BarcodeFormat.EAN_8);
        this.addTest(8, 8, 0.0);
        this.addTest(8, 8, 180.0);
    }
}

describe('Ean8BlackBox1Spec.1', () => {
    it('testBlackBox', done => {
        const test = new Ean8BlackBox1Spec();
        return test.testBlackBox(done);
    });
});
