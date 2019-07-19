/*
 * Copyright 2008 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
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

/*package com.google.zxing.qrcode.encoder;*/

import * as assert from 'assert';
import ErrorCorrectionLevel from '../../../../core/qrcode/decoder/ErrorCorrectionLevel';
import Mode from '../../../../core/qrcode/decoder/Mode';
import Version from '../../../../core/qrcode/decoder/Version';
import QRCode from '../../../../core/qrcode/encoder/QRCode';
import ByteMatrix from '../../../../core/qrcode/encoder/ByteMatrix';

/**
 * @author satorux@google.com (Satoru Takabayashi) - creator
 * @author mysen@google.com (Chris Mysen) - ported from C++
 */
describe('QRCode', () => {

    it('test', () => {
        const qrCode = new QRCode();

        // First, test simple setters and getters.
        // We use numbers of version 7-H.
        qrCode.setMode(Mode.BYTE);
        qrCode.setECLevel(ErrorCorrectionLevel.H);
        qrCode.setVersion(Version.getVersionForNumber(7));
        qrCode.setMaskPattern(3);

        assert.strictEqual(Mode.BYTE.equals(qrCode.getMode()), true);
        assert.strictEqual(ErrorCorrectionLevel.H.equals(qrCode.getECLevel()), true);
        assert.strictEqual(qrCode.getVersion().getVersionNumber(), 7);
        assert.strictEqual(qrCode.getMaskPattern(), 3);

        // Prepare the matrix.
        const matrix = new ByteMatrix(45, 45);
        // Just set bogus zero/one values.
        for (let y: number /*int*/ = 0; y < 45; ++y) {
            for (let x: number /*int*/ = 0; x < 45; ++x) {
                matrix.setNumber(x, y, (y + x) % 2);
            }
        }

        // Set the matrix.
        qrCode.setMatrix(matrix);
        assert.strictEqual(matrix.equals(qrCode.getMatrix()), true);
    });

    it('testToString1', () => {
        const qrCode = new QRCode();
        const expected: string =
            '<<\n' +
            ' mode: null\n' +
            ' ecLevel: null\n' +
            ' version: null\n' +
            ' maskPattern: -1\n' +
            ' matrix: null\n' +
            '>>\n';
        assert.strictEqual(qrCode.toString(), expected);
    });

    it('testToString2', () => {
        const qrCode = new QRCode();
        qrCode.setMode(Mode.BYTE);
        qrCode.setECLevel(ErrorCorrectionLevel.H);
        qrCode.setVersion(Version.getVersionForNumber(1));
        qrCode.setMaskPattern(3);
        const matrix = new ByteMatrix(21, 21);
        for (let y: number /*int*/ = 0; y < 21; ++y) {
            for (let x: number /*int*/ = 0; x < 21; ++x) {
                matrix.setNumber(x, y, (y + x) % 2);
            }
        }
        qrCode.setMatrix(matrix);
        const expected: string = '<<\n' +
            ' mode: BYTE\n' +
            ' ecLevel: H\n' +
            ' version: 1\n' +
            ' maskPattern: 3\n' +
            ' matrix:\n' +
            ' 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0\n' +
            ' 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1\n' +
            ' 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0\n' +
            ' 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1\n' +
            ' 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0\n' +
            ' 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1\n' +
            ' 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0\n' +
            ' 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1\n' +
            ' 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0\n' +
            ' 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1\n' +
            ' 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0\n' +
            ' 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1\n' +
            ' 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0\n' +
            ' 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1\n' +
            ' 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0\n' +
            ' 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1\n' +
            ' 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0\n' +
            ' 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1\n' +
            ' 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0\n' +
            ' 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1\n' +
            ' 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0\n' +
            '>>\n';
        assert.strictEqual(qrCode.toString(), expected);
    });

    it('testIsValidMaskPattern', () => {
        assert.strictEqual(QRCode.isValidMaskPattern(-1), false);
        assert.strictEqual(QRCode.isValidMaskPattern(0), true);
        assert.strictEqual(QRCode.isValidMaskPattern(7), true);
        assert.strictEqual(QRCode.isValidMaskPattern(8), false);
    });

});
