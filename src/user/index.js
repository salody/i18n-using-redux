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
        <h3>{strings.Base.language}</h3>
          <button
            onClick={() => {
            dispatch(changeLanguage('zhcn'))
          }}>
            {strings.Base.chinese}
          </button>
          <button
            onClick={() => {
            dispatch(changeLanguage('en'))
          }}
            style={{marginLeft: 10}}
          >
            {strings.Base.english}
          </button>

        <div>
          <p>{strings.Login.namePlaceholder}</p>
          <p>{strings.Login.buttonLabel}</p>
        </div>
      </div>
    );
  }
}

const TranslatedLogin = Translate('Login')(Login);
export default TranslatedLogin;