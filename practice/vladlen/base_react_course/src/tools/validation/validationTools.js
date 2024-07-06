import { regexForEmail, regexForUsername } from "./regex";

export const validateUsername = (username) => regexForUsername.test(username);
export const validateEmail = (email) => regexForEmail.test(email);
