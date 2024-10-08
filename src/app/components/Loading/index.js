import React from 'react';
import { Spin } from 'antd';
import PropTypes from 'prop-types';
import { Loading3QuartersOutlined } from '@ant-design/icons';
import ReactLoading from 'react-loading';

import './Loading.scss';
import { CONSTANTS } from '@constants';

export default function Loading({
  id,
  active = true,
  className = '',
  minHeight = '400px',
  indicatorType,
  fixedMiddleScreen,
  ...props
}) {
  const style = {};
  if (!props.children) {
    style.height = minHeight;
  }

  let indicator = <Loading3QuartersOutlined spin />;
  if (indicatorType === CONSTANTS.BARS) {
    indicator = <ReactLoading height={32} width={32} type="bars" color="#fff" />;
  }
  
  return (
    <div {...id ? { id } : {}} className={`loading-component${className ? ` ${className}` : ''}`} style={style}>
      {active && (
        <div className="loading-backdrop">
          <Spin
            className={fixedMiddleScreen ? "fixed-middle" : "loading-spin"}
            size="large"
            indicator={indicator}
          />
        </div>
      )}
      {props.children}
    </div>
  );
}

// Định nghĩa propTypes
Loading.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  minHeight: PropTypes.string,
};