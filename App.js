import React from "react";
import MenuHome from './components/MenuHome'
import MenuSelection from './components/MenuSelection'

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  MenuHome: {screen: MenuHome},
  MenuSelection: {screen: MenuSelection},
});

const App = createAppContainer(MainNavigator);

export default App;
