import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Button,
  StyleSheet,
  Picker,
  Item,
  TextInput
  
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { users } from '../config/data';
import SimpleStepper from 'react-native-simple-stepper';
import { Col, Row, Grid } from "react-native-easy-grid";

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            displayValue:0
        };
    }

valueChanged(value) {
  // If you want to set the value to a certain decimal point you can like so:
  const displayValue = value.toFixed(0)
  this.setState({
     displayValue: displayValue
  })
  // ...
}
  onLearnMore = () => {
    this.props.navigation.navigate('Room');
  };
  onPressBtn() {

  }
  mutateCounterMore =()=>{
      this.setState ({
        count: this.state.count + 1
      });
    }
     mutateCounterLess =()=>{
      this.setState ({
        count: this.state.count - 1
      });
    }

  render() {
    return (
        <View>
            <Text style={styles.fontStyle}>TABLES</Text>
            <Text style={{paddingTop:10, paddingBottom:10,marginLeft:175}}>{this.state.displayValue}</Text>
            <SimpleStepper tintColor="white" backgroundColor="#25d8fd" valueChanged={(value) => this.valueChanged(value)} maximumValue={5}/>
            
            <Button
                onPress={this.onLearnMore}
                title="START"
                color="#2196f3"
            />
        </View>
    );
  }
  valueChanged(value) {
  // If you want to set the value to a certain decimal point you can like so:
  const displayValue = value.toFixed(2)
  this.setState({
     displayValue: displayValue
  })
  // ...
}


}

const styles = StyleSheet.create({
    stepper:{
        marginBottom:100
    },
    fontStyle:{
        fontSize: 30,
        textAlign: 'center',
        color: '#5c5c5c',
        marginBottom: 30,
        marginTop: 10,
    }
});


export default Home;