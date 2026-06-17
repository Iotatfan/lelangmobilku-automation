# Automation Test Report

## 📌 Project Information
- **Project:** Web Automation - Lelang Mobilku  
- **URL:** https://auction.lelangmobilku.co.id/  
- **Type:** UI Automation Testing  
- **Framework:** Playwright  
- **Execution Date:** 2026-06-17  
- **Environment:** Production  
- **Browser:** Chromium  

---

## 🎯 Objective

Automation testing to validate main flow of application:

- User Registration
- User Login (valid & invalid credentials)
- Navigation to Deposit Module

Objective:
- Ensure core user journey runs without errors
- Validate UI response & navigation
- Guarantee stability of main application features

---

## 🧪 Test Scope

### Included
- Register functionality (positive & negative cases)
- Login functionality (positive & negative cases)
- Deposit navigation

### Excluded
- Profile edit functionality
- Performance testing
- API testing

---

## 📊 Test Execution Summary

| Test Case ID | Test Scenario                              | Status  | Duration |
|--------------|--------------------------------------------|---------|----------|
| TC-REG-001   | Successful registration                    | PASS    | ~30 sec  |
| TC-REG-002   | Unsuccessful registration (existing email) | PASS    | ~20 sec  |
| TC-REG-003   | Unsuccessful registration (invalid email)  | PASS    | ~20 sec  |
| TC-LOG-001   | Successful login with valid credentials    | FAIL    | ~20 sec  |
| TC-LOG-002   | Unsuccessful login with invalid password   | FAIL    | ~20 sec  |
| TC-LOG-003   | Unsuccessful login with unregistered email | FAIL    | ~20 sec  |
| TC-DEP-001   | Open deposit page from profile menu        | PASS    | ~10 sec  |

**Total:** 7 tests | ✅ 4 Passed | ❌ 3 Failed | ⏱ ~1.6 min

---

## 🧪 Test Scenarios Detail

---

### TC-REG-001 - Successful Registration

**Precondition:** User is not registered

**Steps:**
1. Open registration page
2. Input valid personal details
3. Proceed to bank account setup
4. Enter valid bank account details
5. Click Register button

**Expected Result:**
- Account is successfully created
- Redirect to login/dashboard page
- Success message displayed

**Assertions:**
- `.mosha__toast__content__text` element visible with **exact** text `'Success'` (via `isSuccessfulRegistration()`)
- No `.text-red-500` validation errors shown

**Actual Result:**
- Account successfully created

**Status:** ✅ PASS

---

### TC-REG-002 - Unsuccessful Registration (Existing Email)

**Precondition:** Email is already registered in the system

**Steps:**
1. Open registration page
2. Input an already-registered email
3. Proceed to bank account setup

**Expected Result:**
- Error message "Email has already exist!" displayed
- Registration is rejected

**Assertions:**
- All `.text-red-500` elements fetched via `getErrorMessages()` (returns array of all visible error texts)
- At least one message in the array contains `'Email has already exist!'`
- `messages.join(' ')` also contains `'Email has already exist!'`

**Actual Result:**
- Inline error message displayed correctly

**Status:** ✅ PASS

---

### TC-REG-003 - Unsuccessful Registration (Invalid Email)

**Precondition:** User is on the registration page

**Steps:**
1. Open registration page
2. Input an invalid email format
3. Proceed to bank account setup

**Expected Result:**
- Error message "Email must be a valid email" displayed

**Assertions:**
- All `.text-red-500` elements fetched via `getErrorMessages()` (returns array of all visible error texts)
- At least one message in the array contains `'Email must be a valid email'`
- `messages.join(' ')` also contains `'Email must be a valid email'`

**Actual Result:**
- Validation error displayed correctly

**Status:** ✅ PASS

---

### TC-LOG-001 - Successful Login with Valid Credentials

**Precondition:** User is already registered

**Steps:**
1. Open login page
2. Input valid email & password
3. Click Login button

**Expected Result:**
- User successfully logged in
- Redirect to `/profil/data-diri`

**Assertions:**
- `expect(page).toHaveURL('/profil/data-diri')` — page URL must exactly match `https://auction.lelangmobilku.co.id/profil/data-diri`

**Actual Result:**
- FAIL: Automation failed due to reCAPTCHA trigger — challenge could not be resolved programmatically.

**Status:** ❌ FAIL

---

### TC-LOG-002 - Unsuccessful Login with Invalid Password

**Precondition:** User is already registered

**Steps:**
1. Open login page
2. Input valid email & invalid password
3. Click Login button

**Expected Result:**
- Error message "Username atau Password anda salah" displayed
- User remains on login page

**Assertions:**
- `.mosha__toast__content__description` toast element is visible
- Toast text `.toContain('Username atau Password anda salah')` (via `getErrorMessage()`)

**Actual Result:**
- FAIL: Automation failed due to reCAPTCHA trigger — challenge could not be resolved programmatically.

**Status:** ❌ FAIL

---

### TC-LOG-003 - Unsuccessful Login with Unregistered Email

**Precondition:** User is not registered

**Steps:**
1. Open login page
2. Input unregistered email & valid password
3. Click Login button

**Expected Result:**
- Error message "Username tidak ditemukan/salah" displayed
- User remains on login page

**Assertions:**
- `.mosha__toast__content__description` toast element is visible
- Toast text `.toContain('Username tidak ditemukan/salah')` (via `getErrorMessage()`)

**Actual Result:**
- FAIL: Automation failed due to reCAPTCHA trigger — challenge could not be resolved programmatically.

**Status:** ❌ FAIL

---

### TC-DEP-001 - Open Deposit Page from Profile Menu

**Precondition:** Authenticated session injected via cookies (`access_token`, `refresh_token`, `expiry_time`)

**Steps:**
1. Inject auth cookies into browser context
2. Navigate to profile page
3. Click Deposit menu item
4. Verify the Deposit page is displayed

**Expected Result:**
- Deposit page successfully loaded
- URL navigates to `/profil/deposit`

**Assertions:**
- `expect(page).toHaveURL('/profil/deposit')` — page URL must exactly match `https://auction.lelangmobilku.co.id/profil/deposit`

**Actual Result:**
- Deposit page loaded successfully; URL confirmed as `https://auction.lelangmobilku.co.id/profil/deposit`

**Status:** ✅ PASS

---

## 🐞 Defects / Issues Found

| Bug ID | Module | Description | Severity | Status |
|--------|--------|-------------|----------|--------|
| BUG-01 | Login  | All login test cases fail — automation cannot interact with reCAPTCHA image selector. reCAPTCHA challenge is triggered during automated login, blocking script execution. | High | Open |

---

## 📸 Evidence

- Playwright HTML Report: `playwright-report/index.html`

---

## ⚙️ Test Data

```json
{
  "validUser": {
    "email": "TEST1@email.com",
    "password": "Password1"
  }
}
```