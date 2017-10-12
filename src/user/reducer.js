import {CHANGE_LANGUAGE} from "./constant";

const initialState = {
  lang: 'en',
  name: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        lang: action.language
      };

    default:
      return state;
  }
};

export default userReducer;