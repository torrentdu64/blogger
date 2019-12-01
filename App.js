import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import { Provider} from './src/context/BlogContext';
import CreateScreen from './src/screens/CreateScreen';


const navigator = createStackNavigator({
  Index: IndexScreen,
  Show: ShowScreen

}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Bloggg'
  }
});

const App = createAppContainer(navigator);

export default () => {
  return <Provider><App  /></Provider>
}
