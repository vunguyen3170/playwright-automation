const fs = require("fs-extra");

export function readFileAsBuffer(path: string): Buffer {
    return fs.readFileSync(path);
}
