"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @deprecated Moving to @zxing/browser
 *
 * Video input device metadata containing the id and label of the device if available.
 */
var VideoInputDevice = /** @class */ (function () {
    /**
     * Creates an instance of VideoInputDevice.
     *
     * @param {string} deviceId the video input device id
     * @param {string} label the label of the device if available
     */
    function VideoInputDevice(deviceId, label, groupId) {
        this.deviceId = deviceId;
        this.label = label;
        /** @inheritdoc */
        this.kind = 'videoinput';
        this.groupId = groupId || undefined;
    }
    return VideoInputDevice;
}());
exports.VideoInputDevice = VideoInputDevice;
//# sourceMappingURL=VideoInputDevice.js.map