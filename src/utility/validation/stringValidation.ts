const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const mobileRegex = /^[6-9]\d{9}$/i;
const otpRegex = /^[0-9]{4}$/;
const urlRegex =
  /^((http(s?)?):\/\/)?([wW]{3}\.)?[a-zA-Z0-9\-.]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/;
const stringRegex = /^[a-zA-Z]+([a-zA-Z]+)*$/;
const usernameRegex = /^[a-zA-Z0-9._]+$/;
const gstinRegex =
  /^[0-3][0-9][A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;

export {
  emailRegex,
  gstinRegex,
  mobileRegex,
  otpRegex,
  stringRegex,
  urlRegex,
  usernameRegex,
};
