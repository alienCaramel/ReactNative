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

class Room extends Component {
    constructor(props){
        super(props);
    }
    onPressKitchen() {
        this.props.navigation.navigate('WaitingOrder');
    }
    onPressSalon() {
        this.props.navigation.navigate('Tables');

    }

  render() {
    return (
        <View>
            <Text style={styles.fontStyle}>PICK A ROOM</Text>
            <Button
                style={styles.stepper}
                onPress={() => this.onPressSalon()}
                title="ROOM"
                color="#8bc34a"
            />
            <Button
                onPress={() => this.onPressKitchen()}
                title="KITCHEN"
                color="#cddc39"
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
export default Room;