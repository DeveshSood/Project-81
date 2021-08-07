import DrawerNavigator from './Navigator/DrawerNavigator'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'


export default class App extends React.Component{
  render(){
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
}