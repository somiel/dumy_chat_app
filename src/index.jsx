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

const chatApp = () =>
  <MuiThemeProvider>
    <Chat />
  </MuiThemeProvider>

const renderer = function(id) {
  const MOUNT_NODE = document.getElementById(id);

  ReactDOM.render(
    <MuiThemeProvider>
      <Chat />
    </MuiThemeProvider>,
    MOUNT_NODE
  );
};

window.chatApp = {};
window.chatApp.app = chatApp;
window.chatApp.renderer = renderer;
