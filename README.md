# Test Analysis

## 1. High Risk Area

| Feature | Risk Level | Reason |
| :---: | :---: | :---: |
Registration | High | Account creation, data validation |
Login | High | Authentication |
Edit Profile | Medium | User data modification |
Menu Navigation | Medium | Post login navigation |

# 2. Test Scenario

### TS-REG-001
```gherkin
Feature: Register

  Background:
    Given user is in Registration page

  Scenario: Successful registration
    When user enters valid personal details
    And proceeds to bank account setup
    And enters valid bank account details
    And clicks Register button
    Then account is successfully created
```

### TS-REG-002
```gherkin
Feature: Register

  Background:
    Given user is in Registration page

  Scenario: Unsuccessful registration with existing email
    When user enters existing email
    And proceeds to bank account setup
    Then show email already exists register error
```

### TS-REG-003
```gherkin
Feature: Register

  Background:
    Given user is in Registration page

  Scenario: Unsuccessful registration with invalid email
    When user enters invalid email
    And proceeds to bank account setup
    Then show invalid email register error
```

### TS-LOG-001
```gherkin
Feature: Login

  Background:
    Given user is in Login page

  Scenario: Successful login with valid credentials
    When user enters valid credentials
    And clicks Login button
    Then account is successfully logged in
```

### TS-LOG-002
```gherkin
Feature: Login

  Background:
    Given user is in Login page

  Scenario: Unsuccessful login with invalid password
    When user enters registered email
    And enters invalid password
    And clicks Login button
    Then show wrong credential login error
```

### TS-LOG-003
```gherkin
Feature: Login

  Background:
    Given user is in Login page

  Scenario: Unsuccessful login with unregistered email
    When user enters unregistered email
    And user enters valid password
    And clicks Login button
    Then show unregistered email login error
```

### TS-DEP-001
```gherkin
@authenticated
Feature: Deposit

  Background:
    Given user is on the profile page

  Scenario: Open deposit page from profile menu
    When user selects the Deposit menu
    Then the Deposit page is displayed
```

# 3. Test Case Detail

| Implemented | ID Case | Test Scenario | Case Description | Expected Result | Technique | Reason |
| :---: | ------- | -------------- | --------------- | --------------- | --------- | ------ |
| [x] | TC-REG-001 | Successful registration | Register with valid personal data and bank account data | Account is successfully created | Equivalence Partitioning | Test the valid partition of all required inputs |
| [x] | TC-REG-002 | Unsuccessful registration with existing email | Register with existing email | Show error message "Email has already exist!" | Equivalence Partitioning | Test the invalid partition where certain unique data already exist in system |
| [x] | TC-REG-003 | Unsuccessful registration with invalid email | Register with invalid email format | Show error message "Email must be a valid email" | Equivalence Partitioning | Test the invalid partition where the input format doesn't match the expected email structure |
| [x] | TC-LOG-001 | Successful login with valid credentials | Login with valid credentials | Account is successfully logged in | Equivalence Partitioning | Test the valid partition of registered user credentials |
| [x] | TC-LOG-002 | Unsuccessful login with invalid password | Login with invalid password | Show error message "Username atau Password anda salah" | Equivalence Partitioning | Test the invalid partition of incorrect credentials |
| [x] | TC-LOG-003 | Unsuccessful login with unregistered email | Login with unregistered email | Show error message "Username tidak ditemukan/salah" | Equivalence Partitioning | Test the invalid partition of incorrect credentials |
| [ ] | TC-EDIT-001 | Successful profile edit | Edit profile with valid personal and bank account data | Profile is successfully updated | Equivalence Partitioning | Test the valid partition of profile update inputs |
| [ ] | TC-EDIT-002 | Unsuccessful profile edit with invalid phone number | Edit profile with invalid phone number format | Show error message "Invalid phone number format" | Boundary Value Analysis | Test the minimum and maximum phone number length |
| [ ] | TC-EDIT-003 | Unsuccessful profile edit with invalid email | Edit profile with invalid email format | Show error message "Invalid email format" | Equivalence Partitioning | Test the invalid partition where the input format doesn't match the expected email structure |
| [x] | TC-DEP-001 | Open deposit page | Navigate to deposit page | Deposit page is displayed | Equivalence Partitioning | Test the valid partition of user credentials |

# 4. Identified Bug/Issue

| Bug / Issue | Severity | Priority | Reason |
| --- | --- | --- | --- |
| Konten form registrasi data diri terlalu panjang, butuh scroll untuk bisa melihat semua field input (beberapa data seperti pekerjaan dan kendaraan bisa dipisah dari data diri?) | Low | Medium | UX issue, tidak merusak fungsionalitas tetapi berpotensi membingunkan pengguna. |
| Data Pembayaran terlihat seperti tampilan navigasi yang tidak aktif, bukan progress bar | Low | Low | UX issue, membingungkan pengguna. |
| Warna text untuk checkbox "Berlaku seumur hidup" kurang kontras | Low | Low | Accessibility issue, teks sulit dibaca. |
| Pilihan warna data kewarganegaraan dan NPWP yang tidak dipilih terlihat seperti disabled | Low | Low | UX issue, tidak merusak fungsionalitas tapi berpotensi membingungkan pengguna. |
| Tidak ada validasi format nomor telepon selain panjang minimal dan maksimal (apakah hanya untuk phone number atau termasuk landline?) | Medium | Medium | Berpotensi nomor telepon yang tidak valid tersimpan. |
| Tidak tersedia tombol untuk mengedit data diri di Profile Page, instead value langsung bisa di edit (Tidak yakin apakah ini bug atau design choice) | Low | Low | UX issue, tidak merusak fungsionalitas tapi membingungkan. |
| Sebagian field penting di profile page (seperti Data Diri, Jenis Kendaraan, Kendaraan yang dicari, Data Rekening) tidak bisa diubah, tetapi email, password, dan nomor telepon bisa diubah | Medium | High | Tidak konsisten dan membatasi pengguna untuk mengubah informasi penting. |
| Tidak terdapat proteksi OTP pada saat proses mengubah field penting seperti email dan password di edit profile page | High | High | Celah keamanan, akun dapat diambil alih tanpa sepengetahuan pemilik. |
| Tampilan tab inactive pada navigasi terlihat seperti disabled | Low | Low | Desain UI kurang intuitif dan berpotensi membingunkan pengguna. |
| Error message typo "ditemukan" seharusnya "ditemukan" | Low | Low | Kesalahan penulisan (typo). |

# 5. Automated Test Suite

## Prerequisites
- Node.js (v18 or later)
- npm

## Setup

Install dependencies:
```bash
npm install
```

Install Playwright browser binaries (Chromium only):
```bash
npx playwright install chromium
```

## Running Tests

Run all BDD scenarios (generates spec files):
```bash
npm run test:bdd
```

To run Playwright tests directly without regenerating specs:
```bash
npm test
```

To regenerate BDD spec files only:
```bash
npm run bddgen
```

## Test Results

| Output | Location |
| --- | --- |
| Playwright HTML Report | `playwright-report/index.html` |
| Test Result Artifacts | `test-results/` |
| Test Report (Markdown) | `docs/test-report.md` |

Open the interactive HTML report after a test run:
```bash
npx playwright show-report
```