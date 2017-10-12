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
          }}>中文
          </li>
          <li onClick={() => {
            dispatch(changeLanguage('en'))
          }}>英文
          </li>
        </ul>
        <p>{strings.namePlaceholder}</p>
        <p>{strings.buttonLabel}</p>
      </div>
    );
  }
}

const TranslatedLogin = Translate('Login')(Login);
export default TranslatedLogin;