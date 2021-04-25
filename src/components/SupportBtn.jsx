import React from 'react';
import './bmc.css';

const propTypes = {};

const defaultProps = {};

export default function SupportBtn() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet" />
      <a className="bmc-button" href="https://www.buymeacoffee.com/alexgladd" target="_blank" rel="noreferrer">
        <img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a coffee" />
        <span style={{ marginLeft: '8px' }}>Buy me a coffee</span>
      </a>
    </>
  );
}

SupportBtn.propTypes = propTypes;
SupportBtn.defaultProps = defaultProps;
