import React, { useReducer } from 'react';
import { Platform,KeyboardAvoidingView,SafeAreaView } from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import Fire from '../fire';




export default class ChatScreens extends React.Component {
  state={
    message:[]
  }
  get user(){
    return{
_id:Fire.uid,
name:this.props.navigation.state.params.name
    }
  }
  componentDidMount(){
    Fire.get(message=>this.setState(prevValue=>({
      message:GiftedChat.append(prevValue.messages,message)
    })))
  }

  componentWillUnmount(){
    Fire.off();
  }

  render(){
    const chat=<GiftedChat messages={this.state.messages} onSend={Fire.send} user={this.user}/>;
    if(Platform.OS == "android")
  return (
    <KeyboardAvoidingView style={{flex:1}} behavior="padding" keyboardVerticalOffset={10} enabled>
      {chat}
    </KeyboardAvoidingView>
  )
  return  <SafeAreaView style={{flex:1}}>{chat}</SafeAreaView>
  }
}

