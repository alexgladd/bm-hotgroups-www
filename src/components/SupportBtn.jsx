import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import ga from './gaEvents';
import './bmc.css';

const propTypes = {};

const defaultProps = {};

export default function SupportBtn() {
  return (
    <>
      <OutboundLink
        href="https://www.buymeacoffee.com/alexgladd"
        className="bmc-button"
        target="_blank"
        rel="noreferrer"
        onClick={ga.sendSupportCta}>
        <img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a coffee" />
        <span style={{ marginLeft: '8px' }}>Buy me a coffee</span>
      </OutboundLink>
    </>
  );
}

SupportBtn.propTypes = propTypes;
SupportBtn.defaultProps = defaultProps;
