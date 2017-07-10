import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Button
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { users } from '../config/data';

class Table extends Component {
  onLearnMore = () => {
    this.props.navigation.navigate('AskOrder');
  };

  render() {
    return (
      <View>
         <Text style={styles.fontStyle}>TABLE</Text>


         <Button
            onPress={() => this.onLearnMore()}
            title="+"
            color="#3f51b5"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    stepper:{
        marginBottom:80
    },
    fontStyle:{
        fontSize: 30,
        textAlign: 'center',
        color: '#5c5c5c',
        marginBottom: 30,
        marginTop: 10,
    }
});
export default Table;