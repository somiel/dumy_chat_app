// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './Chat.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const renderer = function(selector, styles) {
  const MOUNT_NODE = document.querySelector(selector);

  ReactDOM.render(
    <MuiThemeProvider>
      <Chat styles={styles} />
    </MuiThemeProvider>,
    MOUNT_NODE
  );
};

window.chatApp = {};
window.react.chatApp.renderer = renderer;
