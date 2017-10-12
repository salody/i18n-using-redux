import { CHANGE_LANGUAGE } from "./constant";

export const changeLanguage = (language) => {
  return {
    type: CHANGE_LANGUAGE,
    language
  }
};