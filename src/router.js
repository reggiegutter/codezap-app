import {Easing, Animated} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Intro from './containers/intro';
import Home from './containers/home';
import Questions from './containers/questions';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Intro: {screen: Questions},
      Home: {screen: Home},
      Questions: {screen: Questions},
    },
    {
      headerMode: 'none',
      mode: 'modal',
      navigationOptions: {
        gesturesEnabled: false,
      },
      transitionConfig: () => ({
        transitionSpec: {
          duration: 300,
          easing: Easing.out(Easing.poly(4)),
          timing: Animated.timing,
        },
        screenInterpolator: sceneProps => {
          const {layout, position, scene} = sceneProps;
          const {index} = scene;

          const height = layout.initHeight;
          const translateY = position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [height, 0, 0],
          });

          const opacity = position.interpolate({
            inputRange: [index - 1, index - 0.99, index],
            outputRange: [0, 1, 1],
          });

          return {opacity, transform: [{translateY}]};
        },
      }),
    },
  ),
);

export default Routes;
