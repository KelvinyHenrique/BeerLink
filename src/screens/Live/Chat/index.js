import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
 
export default class App extends React.Component {
  state = {
    messages: [],
  }
 
  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Que horas? ',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Kaio Prates',
            avatar: 'https://avatars3.githubusercontent.com/u/36752711?s=460&u=740b3ce32fb6ce710151f66bdf65cc0cc3580cdc&v=4',
          },
        },
        {
  _id: 2,
  text: 'uai, vamo!',
  createdAt: new Date(Date.UTC(2020, 5, 11, 19, 20, 0)),
  user: {
    _id: 2,
    name: 'Higor',
    avatar: 'https://avatars0.githubusercontent.com/u/38510607?s=460&u=c21148a73c3dd471774ae4a9a11bb1d81d46e209&v=4',
  },

},
   {
  _id: 3,
  text: 'Bora?',
  createdAt: new Date(Date.UTC(2020, 5, 11, 17, 20, 0)),
  user: {
    _id: 2,
    name: 'Tony',
    avatar: 'https://avatars1.githubusercontent.com/u/43297863?s=460&u=2314b5efce8cc5f67f7f53e1fe8eff8e6d742f28&v=4',
  },
  image: 'http://catalisi.com.br/wp-content/uploads/2019/12/catalisi-cerveja-mapa-padrao-brinde.jpg',

}
      ],
    })
  }
 
  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }
 
  render() {
    return (
      <GiftedChat
      renderUsernameOnMessage={true}
      alignTop={false}
      onPressAvatar={()=>alert('Pagar uma bebida')}
       showAvatarForEveryMessage={true}
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    )
  }
}