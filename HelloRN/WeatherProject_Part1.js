import React, {
  Component,
} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,  
} from 'react-native';

class WeatherProject extends Component {
  constructor(props) {
    super(props);
    this.state = { zip: '100190' };
  }

  _handleTextChange(event) {
    console.log(event.nativeEvent.text);
    this.setState({
      zip: event.nativeEvent.text
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          You input {this.state.zip}.
        </Text>
        <TextInput style={styles.input}
                   returnKeyType='search'
                   onSubmitEditing={(event) => this._handleTextChange(event)}>
        </TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    color:'blue',
    fontSize: 20,
    borderWidth: 2,
    height: 38,
      margin:5
    }
});

export default WeatherProject;
