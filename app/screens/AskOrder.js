import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Picker,
  Item,
  TextInput,
  Button
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { users } from '../config/data';
import { Col, Row, Grid } from "react-native-easy-grid";
import SimpleStepper from 'react-native-simple-stepper';

class AskOrder extends Component {
    constructor(props){
        super(props);
        this.state = {
            foodTimeSelected:null,
            text: 'Descripcion',
            count: 0,
        };
    }
onValueChange = (key: string, value: string) => {
    const newState = {};
    newState[key] = value;
    this.setState(newState);
    
};
onLearnMore(){
    
}
valueChanged(value) {
  // If you want to set the value to a certain decimal point you can like so:
  const displayValue = value.toFixed(0)
  this.setState({
     displayValue: displayValue
  })
  // ...
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
            <Text style={styles.fontStyle}>MAKE YOUR ORDER</Text>
                <Picker
                    style={styles.picker}
                    selectedValue={this.state.foodTimeSelected}
                    onValueChange={this.onValueChange.bind(this, 'foodTimeSelected')}>
                    <Picker.Item value="ENTRADA" label="ENTRADA"/>
                    <Picker.Item value="PLATO PRINCIPAL"  label="PLATO PRINCIPAL"/>
                    <Picker.Item value="BEBIDA"  label="BEBIDA"/>
                    <Picker.Item value="POSTRE" label="POSTRE"/>
                </Picker>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                    maxLength={80}
                  />
                <Text style={{paddingTop:10, paddingBottom:10,marginLeft:175}}>{this.state.displayValue}</Text>
                <SimpleStepper tintColor="white" backgroundColor="#7e57c2" valueChanged={(value) => this.valueChanged(value)} maximumValue={90}
                onPress={this.onPressBtn}
                title="ADD"
                color="#673ab7"
                />
                <Button
                onPress={this.onLearnMore}
                title="ADD"
                color="#673ab7"
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
export default AskOrder;