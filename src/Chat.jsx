import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { RaisedButton, TextField, Avatar } from 'material-ui';
import moment from 'moment';


class Chat extends Component {

  state = {
    messages: [],
    newMessage: ''
  };

  addMessage() {
    this.setState({
      newMessage: '',
      messages: [...this.state.messages, {
        user: "John Smith",
        time: moment().format('h:mm:ss'),
        text: this.state.newMessage }
      ]
    });
  }

  renderMessages() {
    return(
      this.state.messages.map((msg, i) =>
        <div key={ i } style={ { margin: '10px' } }>
          <Avatar
            src="https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Agent_Smith_(The_Matrix_Reloaded).jpg/220px-Agent_Smith_(The_Matrix_Reloaded).jpg"
            size={ 40 }
          />
        <span>({ msg.time })&nbsp;{ msg.user} said: { msg.text }</span>
        </div>
      )
    );
  }

  render() {
    return (
      <div style={ { backgroundColor: '#fff', width: '400px' } }>
        <h2 style={ { padding: '10px' } }>Chat page</h2>
        <div style={ { margin: '10px' } }>
          { this.renderMessages() }
        </div>
        <section>
          <TextField
            hintText="Say something..."
            style={ { margin: '10px' } }
            value={ this.state.newMessage }
            onChange={ (_, newMessage) => this.setState({ newMessage }) }
            onKeyPress={ (e) => e.key == "Enter" && ::this.addMessage() }
          />
        <RaisedButton
          secondary
          label="Send"
          onClick={ () => ::this.addMessage() }
        />
        </section>
      </div>
    );
  }
}

export default Chat;
