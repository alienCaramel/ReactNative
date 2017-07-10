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
import SimpleStepper from 'react-native-simple-stepper';

class Tables extends Component {

   onTable = (value) => {
       let object = {
           name: 'Table ' + value
       }
    this.props.navigation.navigate('Table', { ...object });
  };


  render() {
    return (
        <View>
            <Text style={styles.fontStyle}>PICK A TABLE </Text>
           <Button
                style={styles.stepper}
                onPress={() => this.onTable(1)}
                title="1"
                color="#ffeb3b"
            />
            <Button
                onPress={() => this.onTable(2)}
                title="2"
                color="#ffa726"
            />
            <Button
                onPress={() => this.onTable(3)}
                title="3"
                color="#ff9800"
            />
             <Button
                onPress={() => this.onTable(4)}
                title="4"
                color="#ff5722"
            />
             <Button
                onPress={() => this.onTable(5)}
                title="5"
                color="#f44336"
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
export default Tables;