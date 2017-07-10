import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Feed from '../screens/Feed';
import Settings from '../screens/Settings';
import UserDetail from '../screens/UserDetail';
import Me from '../screens/Me';

import AskOrder from '../screens/AskOrder';
import Home from '../screens/Home';
import Room  from '../screens/Room';
import Table from '../screens/Table';
import Tables from '../screens/Tables';
import WaitingOrder from '../screens/WaitingOrder';



export const FeedStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    },
  },
  Room: {
    screen: Room ,
    navigationOptions: {
      title: 'Room',
    },
  },
  Tables: {
    screen: Tables,
    navigationOptions: {
      title: 'Tables',
    },
  },
  Table: {
    screen: Table,
     navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name}`,
    }),
  },
  AskOrder: {
    screen: AskOrder,
    navigationOptions: {
      title: 'AskOrder',
    },
  },
  WaitingOrder: {
    screen: WaitingOrder,
    navigationOptions: {
      title: 'Kitchen',
    },
  },
  Details: {
    screen: UserDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
    }),
  },
});

export const Tabs = TabNavigator({
  Feed: {
    screen: FeedStack,
    // navigationOptions: {
    //   tabBarLabel: 'Home',
    //   tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={'#fe7e00'} />,
    // },
  },

});

export const SettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'HOME',
    },
  },
  
});



// export const Place = StackNavigator({
//   Place: {
//     screen: Place ,
//     navigationOptions: {
//       title: 'Place',
//     },
//   },
// });

// export const Table = StackNavigator({
//   Table: {
//     screen: Table ,
//     navigationOptions: {
//       title: 'Table',
//     },
//   },
// });

// export const Tables = StackNavigator({
//   Tables: {
//     screen: Tables ,
//     navigationOptions: {
//       title: 'Tables',
//     },
//   },
// });

// export const AskOrder = StackNavigator({
//   ASkOrder: {
//     screen: AskOrder,
//     navigationOptions: {
//       title: 'AskOrder',
//     },
//   },
// });

// export const ListOrder = StackNavigator({
//   ListOrder: {
//     screen: ListOrder,
//     navigationOptions: {
//       title: 'ListOrder',
//     },
//   },
// });

// export const WaitingOrder = StackNavigator({
//   WaitingOrder: {
//     screen: WaitingOrder,
//     navigationOptions: {
//       title: 'WaitingOrder',
//     },
//   },
// });

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
  Settings: {
    screen: SettingsStack,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});
