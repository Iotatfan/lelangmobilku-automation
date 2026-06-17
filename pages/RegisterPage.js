const BasePage = require('./BasePage');

class RegisterPage extends BasePage {
  constructor(page) {
    super(page);
    this.givenNameInput = 'input[placeholder="Nama Depan"]';
    this.surnameInput = 'input[placeholder="Nama Belakang"]';
    this.birthLocationInput = 'input[placeholder="Tempat Lahir"]';
    this.birthDateInput = 'label:text("Tanggal Lahir*") + div input';
    this.idCardNumberInput = 'input[placeholder="Nomor KTP"]';
    this.idCardPictureInput = 'input[name="uploadKtp"]';
    this.idCardExpiryInput = 'label:text("Masa Berlaku KTP*") + div input';
    this.lifetimeIdCardCheckBox = 'div:has(span:text("Berlaku seumur hidup")) input[type="checkbox"]';
    this.provinceInput = 'input[aria-placeholder="Pilih Provinsi"]';
    this.cityInput = 'input[aria-placeholder="Pilih Kota"]';
    this.domicileInput = 'label:text("Alamat Domisili*") + div textarea';
    this.phoneInput = 'input[placeholder="Nomor Telepon"]';
    this.jobDropdown = 'input[aria-placeholder="Pilih Pekerjaan"]';
    this.npwpNumberInput = 'label:text("Nomor NPWP") + div input';
    this.vehicleTypeInput = 'input[aria-placeholder="Jenis Kendaraan"]';
    this.vehiclePurposeInput = 'input[aria-placeholder="Pilih Kendaraan"]';
    this.purchasePurposeInput = 'input[aria-placeholder="Pilih Tujuan"]';
    this.emailInput = 'input[name="email"]';
    this.passwordInput = 'input[name="new_password"]';
    this.confirmPasswordInput = 'input[name="confirm_password"]';
    this.nextButton = 'button:has-text("Selanjutnya")';
    this.backButton = 'button:has-text("Kembali")';
    this.accountNumberInput = 'input[placeholder="Nomor Rekening"]';
    this.bankDropdown = 'input[aria-placeholder="Pilih Bank"]';
    this.accountNameInput = 'input[placeholder="Nama Pemilik Rekening"]';
    this.fundSourceInput = 'input[aria-placeholder="Pilih Sumber Tabungan"]';
    this.paymentMethodInput = 'input[aria-placeholder="Pilih Metode Pembayaran"]';
    this.registerButton = 'button:has-text("Daftar")';
    this.errorMessage = '.text-red-500';
    this.successMessage = '.mosha__toast__content__text';
    this.errorEmailAlreadyExists = 'Email has already exist!';
    this.errorEmailInvalid = 'Email must be a valid email';
  }

  async goto() {
    await this.navigate('/register');
  }

  async fillPersonalDetails({
    givenName,
    surname,
    email,
    password,
    confirmPassword,
    birthLocation,
    idCardNumber,
    idCardPicture,
    lifetimeIdCard,
    npwpOption,
    npwpNumber,
    nationality,
    province,
    city,
    domicile,
    phone,
    job,
  }) {
    await this.fillText(this.givenNameInput, givenName);
    await this.fillText(this.surnameInput, surname);
    await this.fillText(this.emailInput, email);
    await this.fillText(this.passwordInput, password);
    await this.fillText(this.confirmPasswordInput, confirmPassword);
    await this.fillText(this.birthLocationInput, birthLocation);
    await this.selectDate(this.birthDateInput);
    await this.fillText(this.idCardNumberInput, idCardNumber);
    await this.uploadFile(this.idCardPictureInput, idCardPicture);
    if (lifetimeIdCard) {
      await this.clickElement(this.lifetimeIdCardCheckBox);
    } else {
      await this.selectDate(this.idCardExpiryInput);
    }
    await this.clickElement(this.getNationalityOption(nationality));
    await this.selectOption(this.provinceInput, province);
    await this.selectOption(this.cityInput, city);
    await this.fillText(this.domicileInput, domicile);
    await this.fillText(this.phoneInput, phone);
    await this.selectOption(this.jobDropdown, job);
    await this.clickElement(this.getNpwpOption(npwpOption));
    if (npwpOption === 'Ada NPWP') {
      await this.fillText(this.npwpNumberInput, npwpNumber);
    }
    await this.selectFirstOption(this.vehicleTypeInput);
    await this.selectFirstOption(this.vehiclePurposeInput);
    await this.selectFirstOption(this.purchasePurposeInput);
  }

  async clickNextButton() {
    await this.clickElement(this.nextButton);
  }

  async fillBankAccountDetails(bankName, accountNumber, accountHolderName, fundSource, paymentMethod) {
    await this.selectOption(this.bankDropdown, bankName);
    await this.fillText(this.accountNumberInput, accountNumber);
    await this.fillText(this.accountNameInput, accountHolderName);
    await this.selectOption(this.fundSourceInput, fundSource);
    await this.selectOption(this.paymentMethodInput, paymentMethod);
  }

  async clickRegisterButton() {
    await this.clickElement(this.registerButton);
  }

  async getErrorMessage() {
    await this.waitForElement(this.errorMessage);
    return await this.getText(this.errorMessage);
  }

  async getErrorMessages() {
    await this.waitForElement(this.errorMessage);
    return await this.page.locator(this.errorMessage).allTextContents();
  }

  async hasErrorMessage(expectedMessage) {
    const messages = await this.getErrorMessages();
    return messages.some(message => message.trim().includes(expectedMessage));
  }

  async isSuccessfulRegistration() {
    try {
      await this.waitForElement(this.successMessage);
      const text = await this.getText(this.successMessage);
      return text?.trim() === 'Success';
    } catch (e) {
      return false;
    }
  }

  getNationalityOption(value) {
    return `div:has(label:text("Kewarganegaraan*")) button:has-text("${value}")`;
  }

  getNpwpOption(value) {
    return `div:has(label:text("NPWP*")) button:has-text("${value}")`;
  }

  async selectDate(dateInput) {
    await this.clickElement(dateInput);

    const calendar = this.page.getByRole('dialog', { name: 'Datepicker menu' });
    const datePicker = calendar
      .locator('.dp__calendar_item[aria-disabled="false"]')
      .first();

    await this.clickElement(datePicker);
    await this.clickElement(calendar.getByText('Select', { exact: true }));
  }

  async selectOption(dropdown, optionName) {
    await this.clickElement(dropdown);
    await this.page.getByRole('option', { name: optionName, exact: true }).click();
  }

  async selectFirstOption(dropdown) {
    await this.clickElement(dropdown);
    await this.page.locator('[role="option"]:visible').first().click();
  }

  /**
   * Setup network mocking to intercept the registration API call.
   * This is useful for testing registration on a live environment without
   * polluting the database with dummy user data.
   */
  async mockSuccessfulRegistrationAPI() {
    // Replace '**/api/register' with the actual endpoint your application hits
    await this.page.route('**/api/register', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ message: 'User registered successfully', userId: 'mocked-id' })
      });
    });
  }
}

module.exports = RegisterPage;
