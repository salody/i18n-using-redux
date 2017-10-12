import React, {Component} from 'react';
import Translate from '../i18n/Translate';
import {changeLanguage} from "./action";


class Login extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {strings, dispatch} = this.props;
    return (
      <div>
        <ul>
          <li onClick={() => {
            dispatch(changeLanguage('zhcn'))
          }}>
            {strings.Base.chinese}
          </li>
          <li onClick={() => {
            dispatch(changeLanguage('en'))
          }}>
            {strings.Base.english}
          </li>
        </ul>
        <p>{strings.Login.namePlaceholder}</p>
        <p>{strings.Login.buttonLabel}</p>
      </div>
    );
  }
}

const TranslatedLogin = Translate('Login')(Login);
export default TranslatedLogin;