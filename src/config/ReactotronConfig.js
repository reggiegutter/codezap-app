import Reactotron from 'reactotron-react-native';

const tron = Reactotron.configure({host: 'localhost'})
  .useReactNative()
  .connect();

tron.clear();

console.tron = tron;
