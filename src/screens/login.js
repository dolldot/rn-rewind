import React, {Component} from 'react';
import {View, TextInput, Text, TouchableHighlight} from 'react-native';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  _loginUser = async () => {
    const {navigate} = this.props.navigation;
    // const {email, password} = this.state;
    navigate('AuthLoading');
  };

  _pushEmail = text => {
    this.setState({
      email: text,
    });
  };

  _pushPass = text => {
    this.setState({
      password: text,
    });
  };

  render() {
    return (
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flex: 1,
          justifyContent: 'center',
          paddingLeft: 20,
          paddingRight: 20,
          backgroundColor: '#474848',
          //   backgroundColor: 'white',
        }}>
        <View sytle={{backgroundColor: 'orange', borderWidth: 1}}>
          <Text
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              fontWeight: 'bold',
              justifyContent: 'center',
              alignSelf: 'center',
              marginBottom: 40,
              fontSize: 30,
              color: 'white',
            }}>
            ENTER CHAT ROOM
          </Text>
          <TextInput
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              height: 60,
              backgroundColor: '#313131',
              paddingLeft: 10,
              marginBottom: 20,
              borderRadius: 30,
            }}
            onChangeText={this._pushEmail}
            value={this.state.email}
            placeholder="Email"
            placeholderTextColor="#979797"
          />

          <TextInput
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              height: 60,
              backgroundColor: '#313131',
              paddingLeft: 10,
              marginBottom: 40,
              borderRadius: 30,
            }}
            onChangeText={this._pushPass}
            value={this.state.password}
            placeholder="Password"
            placeholderTextColor="#979797"
            secureTextEntry={true}
          />

          <TouchableHighlight
            onPress={this._loginUser}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              justifyContent: 'center',
              backgroundColor: '#4F74FE',
              padding: 15,
              borderRadius: 30,
              height: 60,
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                alignSelf: 'center',
                fontSize: 20,
              }}>
              LOGIN
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default Login;
