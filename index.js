import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Router from './src/router';

if (__DEV__) {
  import('./src/config/ReactotronConfig').then(() =>
    console.log('Reactotron Configured'),
  );
}

AppRegistry.registerComponent(appName, () => Router);
