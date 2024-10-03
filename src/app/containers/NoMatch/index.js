import React from 'react';
import { URL } from '@url';
import { t } from 'i18next';
import { Button } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import ERROR_404 from '@assets/icons/error-404.png';

import './NoMatch.scss';

export default function NoMatch({ history }) {
  return <div id="no-match-container">
    <div id="no-match">
      <img className="img-not-found" src={ERROR_404} alt=""/>
      <div className="no-match__text">{t('SORRY_THE_PAGE_YOU_ARE_TRYING_TO_ACCESS_DOES_NOT_EXIST')}</div>
      <Button type="primary" onClick={() => history.replace(URL.MENU.HOME)}>
        <HomeOutlined />
        <span className="btn__title">
          {t('BACK_HOME')}
        </span>
      </Button>
    </div>
  </div>;
}
