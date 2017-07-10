import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Button
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { kitchen } from '../config/data';
import SimpleStepper from 'react-native-simple-stepper';

class WaitingOrder extends Component {
    onLearnMore = (kit) => {
    
    };

  render() {
    return (
        <View>
            <ScrollView>
                <Text style={styles.fontStyle}>ORDER</Text>
                <List>
                    {kitchen.map((kit) => (
                <ListItem
                    title={`${kit.name}`}
                    subtitle={kit.cant}
                    onPress={() => this.onLearnMore(kit)}
                />
          ))}
              </List>
           </ScrollView>   
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
export default WaitingOrder;









