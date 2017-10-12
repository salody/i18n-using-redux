import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import en from './en';
import zhcn from './zh-cn';

const languages = { en, zhcn };

// key是你要传入的模板的名字，对应于每个i18n文件的key值，是个字符串
export default function translate(key) {
  return Component => {
    const stateToProps = state => ({
      currentLanguage: state.user.lang
    });

    class TranslationComponent extends React.Component {
      render() {
        let strings = {
          Base: languages[this.props.currentLanguage].Base
        };
        strings[key] = languages[this.props.currentLanguage][key];
        const merged = {
          ...this.props.strings,
          ...strings
        };
        if (strings) {
          return (
            <Component
              {...this.props}
              strings={merged}
              currentLanguage={this.props.currentLanguage}
            />
          );
        }

        return (
          <Component
            {...this.props}
            currentLanguage={this.props.currentLanguage}
          />
        );
      }
    }

    TranslationComponent.propTypes = {
      strings: PropTypes.object,
      currentLanguage: PropTypes.string
    };

    return connect(stateToProps)(TranslationComponent);
  };
}