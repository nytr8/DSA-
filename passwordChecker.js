
function  strongPasswordCheckerII(password) {
    let hasLower = false;
    let hasUpper = false;
    let hasDigit = false;
    let hasSpecial = false;

    if (password.length < 8) {
      return false;
    }

    for (let i = 0; i < password.length; i++) {
      let char = password[i];

      // check lowercase
      if (char >= "a" && char <= "z") {
        hasLower = true;
      }

      // check uppercase
      else if (char >= "A" && char <= "Z") {
        hasUpper = true;
      }

      // check digit
      else if (char >= "0" && char <= "9") {
        hasDigit = true;
      }

      // special character
      else {
        hasSpecial = true;
      }

      // check adjacent duplicates
      if (i > 0 && password[i] === password[i - 1]) {
        return false;
      }
    }

    return hasLower && hasUpper && hasDigit && hasSpecial;
  }


strongPasswordCheckerII("iusdhvsdhv@#$123ab");
