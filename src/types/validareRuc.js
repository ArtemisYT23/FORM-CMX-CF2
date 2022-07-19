export const validateRuc = email => {
    const emailRegex = new RegExp(
        /^[0-9]*(\.?)[13]+$/
    );
    return emailRegex.test(email);
  };