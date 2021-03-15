import React from 'react';
import { Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './messagebar.scss';

const MessageBar = ({ message }) => (
  <Message>
    <p>
      {message}
    </p>
  </Message>
);

MessageBar.propTypes = {
  message: PropTypes.string.isRequired,
};

export default MessageBar;
