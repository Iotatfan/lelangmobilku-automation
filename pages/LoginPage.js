const BasePage = require('./BasePage');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.emailInput = 'input[name="email"]';
    this.passwordInput = 'input[name="password"]';
    this.tncCheckbox = 'input[id="remember_me"]';
    this.captchaIframe = 'iframe[title="reCAPTCHA"]';
    this.captchaCheckbox = '#recaptcha-anchor';
    this.loginButton = 'button:has-text("Masuk")';
    this.errorMessage = '.mosha__toast__content__description';
    this.wrongCredentialMessage = 'Username atau Password anda salah';
    this.unregisteredEmailMessage = 'Username tidak di temukan/salah';
    this.successDashboard = 'a:text("Profil Saya")';
  }

  async goto() {
    await this.navigate('/login');
  }

  async fillCredentials(email, password) {
    await this.fillText(this.emailInput, email);
    await this.fillText(this.passwordInput, password);

    await this.checkElement(this.tncCheckbox);

    const captchaFrame = this.page.frameLocator(this.captchaIframe);
    await captchaFrame.locator(this.captchaCheckbox).click();
    await captchaFrame.locator(`${this.captchaCheckbox}[aria-checked="true"]`).waitFor({ state: 'attached', timeout: 30000 });
  }

  async clickLoginButton() {
    await this.clickElement(this.loginButton);
  }

  async getErrorMessage() {
    await this.waitForElement(this.errorMessage);
    return await this.getText(this.errorMessage);
  }

  async isSuccessfulLogin() {
    try {
      await this.waitForElement(this.successDashboard);
      return true;
    } catch (e) {
      return false;
    }
  }
}

module.exports = LoginPage;
