const { URL } = require("url");
class Generic {
  constructor(path) {
    this.path = path;
    this.url = new URL(path, browser.options.baseUrl);
  }
  load() {
    browser.url(this.path);
  }
}
module.exports = Generic;
