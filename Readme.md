# 1. High Risk Area

Registration Page
Login Page
Edit Profile Page

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
    Then show error message "Username atau Password anda salah"
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
    Then show error message "Username tidak di temukan/salah"
```

# 3. Test Case Detail

| ID Case | Test Scenario | Expected Result |
| ------- | -------------- | --------------- |
| TC-REG-001 | Successful registration | Account is successfully created |
| TC-REG-002 | Unsuccessful registration with existing email | Show error message "Email has already exist!" |
| TC-REG-003 | Unsuccessful registration with invalid email | Show error message "Email must be a valid email" |
| TC-LOG-001 | Successful login with valid credentials | Account is successfully logged in |
| TC-LOG-002 | Unsuccessful login with invalid password | Show error message "Username atau Password anda salah" |
| TC-EDIT-001 | Successful profile edit | Profile is successfully updated |
| TC-EDIT-002 | Unsuccessful profile edit with invalid phone number | Show error message "Invalid phone number format" |
| TC-EDIT-003 | Unsuccessful profile edit with invalid email | Show error message "Invalid email format" |

# 4. Identified Bug/Issue

### Tidak tersedia tombol untuk mengedit data diri di Profile Page

### Tidak bisa mengubah banyak field di profile page (seperti Jenis Kendaraan, Kendaraan yang dicari, Data Rekening) tetapi email, password, dan nomor hp bisa diubah

### Tidak terdapat protection otp sewaktu mengubah field penting seperti email dan password di edit profile page

### Tampilan Greyout pada menu navigasi terlihat seperti tampilan disabled