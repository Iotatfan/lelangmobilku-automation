const BasePage = require('./BasePage');

class DepositPage extends BasePage {
  constructor(page) {
    super(page);
    this.profilePath = '/profil/data-diri';
    this.depositPath = '/profil/deposit';
    this.depositMenu = 'a:text("Deposit")';
  }

  async gotoProfile() {
    await this.navigate(this.profilePath);
  }

  async clickDepositMenu() {
    await this.clickElement(this.depositMenu);
  }

}

module.exports = DepositPage;
