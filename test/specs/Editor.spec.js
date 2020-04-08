const expect = require("chai").expect;
const Auth = require("../pageObjects/Auth.page");
const Editor = require("../pageObjects/Editor.page");
const { user1 } = require("../fixtures/users");
const auth = new Auth();
const editor = new Editor();
describe("Post Editor", function () {
  before(function () {
    auth.load();
    auth.login(user1);
  });
  beforeEach(function () {
    editor.load();
  });
  it("should load page properly", function () {
    expect(browser.getUrl()).to.equal(editor.url.href);
    expect(editor.$title.isExisting(), "Title").to.be.true;
    expect(editor.$description.isExisting(), "Description").to.be.true;
    expect(editor.$body.isExisting(), "Body").to.be.true;
    expect(editor.$tags.isExisting(), "Tags").to.be.true;
    expect(editor.$publish.isExisting(), "Publish").to.be.true;
  });
  it("should let you publish a new post", function () {
    editor.submitArticle({
      title: "Test Title",
      description: "Test Description",
      body: "Test Body",
      tags: ["Tag1"],
    });
    $(".article-page").waitForExist();
    expect(browser.getUrl()).to.include("articles/test-title");
    $("button*=Delete Article").click();
  });
});
