class BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  async navigate(url) {
    await this.page.goto(url);
  }

  getLocator(target) {
    return typeof target === 'string' ? this.page.locator(target) : target;
  }

  async waitForElement(target) {
    await this.getLocator(target).waitFor({
      state: 'visible'
    });
  }

  async clickElement(target) {
    await this.getLocator(target).click();
  }

  async checkElement(target) {
    await this.getLocator(target).check();
  }

  async fillText(target, text) {
    await this.getLocator(target).fill(text);
  }

  async getText(target) {
    return await this.getLocator(target).textContent();
  }

  async uploadFile(target, filePath) {
    await this.getLocator(target).setInputFiles(filePath);
  }
}

module.exports = BasePage;
