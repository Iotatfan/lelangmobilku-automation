# 1. High Risk Area

Registration Page
Login Page
Edit Profile Page

# 2. Test Scenario

### TS-REG-001
```gherkin
Feature: Register

  Scenario: Sucessfull registration
    Given user is in Registration page
    When user enter valid credentials data
    And click Register button
    Then account is successfully created
```

### TS-REG-002
```gherkin
Feature: Register

  Scenario: Unsuccessful registration with existing email
    Given user is in Registration page
    When user enter existing email
    And click Register button
    Then show error message "Email already exists"
```

### TS-LOG-001
```gherkin
Feature: Login

  Scenario: Sucessfull login with valid credentials
    Given user is in Login page
    When user enters valid email and password
    And clicks Login button
    Then account is successfully logged in
```

### TS-LOG-002
```gherkin
Feature: Login

  Scenario: Unsucessfull login with invalid password
    Given user is in Login page
    When user enters registered email
    And enters invalid password
    And clicks Login button
    Then show error message "Email and password don't match"
```

### TS-LOG-003
```gherkin
Feature: Login

  Scenario: Unsucessfull login with invalid email
    Given user is in Login page
    When user enters invalid email
    And enters registered password
    And clicks Login button
    Then show error message "Email and password don't match"
```

# 3. Test Case Detail

| ID Case | Test Scenario | Expected Result |
| ------- | -------------- | --------------- |
| TS-REG-001 | Successful registration | Account is successfully created |
| TS-REG-002 | Unsuccessful registration with existing email | Show error message "Email already exists" |
| TS-REG-003 | Unsuccessful registration with invalid email | Show error message "Invalid email format" |
| TS-LOG-001 | Successful login with valid credentials | Account is successfully logged in |
| TS-LOG-002 | Unsuccessful login with invalid password | Show error message "Email and password don't match" |
| TS-LOG-003 | Unsuccessful login with invalid email | Show error message "Email and password don't match" |
| TS-EDIT-001 | Successful profile edit | Profile is successfully updated |
| TS-EDIT-002 | Unsuccessful profile edit with invalid phone number | Show error message "Invalid phone number format" |
| TS-EDIT-003 | Unsuccessful profile edit with invalid email | Show error message "Invalid email format" |

# 4. Identified Bug/Issue

### Tidak tersedia tombol untuk mengedit data diri di Profile Page

### Tidak bisa mengubah banyak field di profile page (seperti Jenis Kendaraan, Kendaraan yang dicari, Data Rekening) tetapi email, password, dan nomor hp bisa diubah

### Tidak terdapat protection otp sewaktu mengubah field penting seperti email dan password di edit profile page
