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

| ID Case | Test Scenario | Expected Result | Technique | Reason |
| ------- | -------------- | --------------- | --------- | ------ |
| TC-REG-001 | Successful registration | Account is successfully created | Equivalence Partitioning | Test the valid partition of all required inputs |
| TC-REG-002 | Unsuccessful registration with existing email | Show error message "Email has already exist!" | Equivalence Partitioning | Test the invalid partition where certain unique data already exist in system |
| TC-REG-003 | Unsuccessful registration with invalid email | Show error message "Email must be a valid email" | Equivalence Partitioning | Test the invalid partition where the input format doesn't match the expected email structure |
| TC-LOG-001 | Successful login with valid credentials | Account is successfully logged in | Equivalence Partitioning | Test the valid partition of registered user credentials |
| TC-LOG-002 | Unsuccessful login with invalid password | Show error message "Username atau Password anda salah" | Equivalence Partitioning | Test the invalid partition of incorrect credentials |
| TC-LOG-003 | Unsuccessful login with unregistered email | Show error message "Username tidak di temukan/salah" | Equivalence Partitioning | Test the invalid partition of incorrect credentials |
| TC-EDIT-001 | Successful profile edit | Profile is successfully updated | Equivalence Partitioning | Test the valid partition of profile update inputs |
| TC-EDIT-002 | Unsuccessful profile edit with invalid phone number | Show error message "Invalid phone number format" | Boundary Value Analysis | Test the minimum and maximum phone number length |
| TC-EDIT-003 | Unsuccessful profile edit with invalid email | Show error message "Invalid email format" | Equivalence Partitioning | Test the invalid partition where the input format doesn't match the expected email structure |

# 4. Identified Bug/Issue

| Bug / Issue | Severity | Priority | Reason |
| --- | --- | --- | --- |
| Konten form registrasi data diri terlalu panjang, butuh scroll untuk bisa melihat semua field input (beberapa data seperti pekerjaan dan kendaraan bisa dipisah dari data diri?) | Low | Medium | Masalah UX, tidak merusak fungsionalitas tetapi mempengaruhi kenyamanan pengguna. |
| Data Pembayaran terlihat seperti tampilan disabled, bukan progress bar | Low | Low | Membingungkan pengguna secara visual, pengguna bisa mengira halaman tersebut tidak dapat diakses. |
| Warna text untuk checkbox "Berlaku seumur hidup" kurang kontras | Low | Low | Masalah aksesibilitas, teks sulit dibaca yang dapat mempengaruhi User Experience. |
| Pilihan warna data kewarganegaraan dan NPWP yang tidak dipilih terlihat seperti disabled | Low | Low | Desain membingungkan, pengguna mungkin mengira opsi tersebut tidak bisa dipilih. |
| Tidak ada validasi format nomor telepon (apakah hanya untuk phone number atau termasuk landline?) | Medium | Medium | Berpotensi menyimpan data tidak valid yang dapat mengganggu komunikasi dengan pengguna. |
| Tidak tersedia tombol untuk mengedit data diri di Profile Page, instead value langsung bisa di edit (Tidak yakin apakah ini bug atau design choice) | Low | Low | Ketidakkonsistenan UX, berpotensi memicu perubahan data yang tidak disengaja oleh pengguna. |
| Sebagian field penting di profile page (seperti Data Diri, Jenis Kendaraan, Kendaraan yang dicari, Data Rekening) tidak bisa diubah, tetapi email, password, dan nomor telepon bisa diubah | Medium | Medium | Membatasi pengguna dalam memperbarui informasi vital mereka. |
| Tidak terdapat proteksi OTP pada saat proses mengubah field penting seperti email dan password di edit profile page | High | High | Celah keamanan yang serius, akun rentan diretas dan diambil alih tanpa sepengetahuan pemilik. |
| Tampilan tab inactive pada navigasi terlihat seperti disabled | Low | Low | Desain UI yang kurang intuitif dan dapat membingungkan interaksi pengguna. |
| Error message typo "di temukan" seharusnya "ditemukan" | Low | Low | Kesalahan penulisan (typo), mengurangi profesionalisme tampilan aplikasi tetapi tidak berdampak pada fungsi. |
