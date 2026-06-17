const BasePage = require('./BasePage');

class DepositPage extends BasePage {
  constructor(page) {
    super(page);
    this.profilePath = '/profil/data-diri';
    this.depositMenu = 'a:text("Deposit")';
    this.depositContent = 'h2:text("Deposit")';
  }

  async gotoProfile() {
    await this.navigate(this.profilePath);
  }

  async clickDepositMenu() {
    await this.clickElement(this.depositMenu);
  }

  async isDepositPageVisible() {
    try {
      await this.waitForElement(this.depositContent);
      return true;
    } catch (e) {
      return false;
    }
  }
}

module.exports = DepositPage;
