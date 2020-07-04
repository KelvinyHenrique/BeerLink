import React from 'react';
import {GiftedChat} from 'react-native-gifted-chat';

export default class App extends React.Component {
  state = {
    messages: [],
  };

  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Oi tudo bem!?!',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Kaio Prates',
            avatar:
              'https://avatars3.githubusercontent.com/u/36752711?s=460&u=740b3ce32fb6ce710151f66bdf65cc0cc3580cdc&v=4',
          },
        },
      ],
    });
  }

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  render() {
    return (
      <GiftedChat
        onPressAvatar={() => alert('eita')}
        showAvatarForEveryMessage={true}
        messages={this.state.messages}
        onSend={(messages) => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    );
  }
}
