import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import SplashSreen from '../scenes/SplashSreen/index';

export default createAppContainer(
  createSwitchNavigator({
    SplashSreen: SplashSreen,
    
    Main: MainTabNavigator,
  }),
);
