import React, {useState, useCallback} from 'react';
import {View, SafeAreaView, Image, ActivityIndicator} from 'react-native';
import {Button} from 'react-native-material-ui';
import Logo from '../../images/codezap-logo.png';

export default function({navigation}) {
  const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

  const [isSending, setIsSending] = useState(false);

  const sendRequest = useCallback(() => {
    const fetchChat = async () => {
      if (isSending) {
        return;
      }

      setIsSending(true);

      try {
        await delay(2000);
        setIsSending(false);

        navigation.navigate({
          routeName: 'Home',
        });
      } catch (error) {
        setIsSending(false);
      }
    };

    fetchChat();
  }, [isSending, navigation]);

  return (
    <View style={{paddingHorizontal: 15, flex: 1}}>
      <SafeAreaView
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Image
            source={Logo}
            alt="Logo Codezap"
            style={{width: 300, height: 75, marginBottom: 60}}
          />
          <Button
            onPress={sendRequest}
            disabled={isSending}
            primary
            raised
            text={isSending ? '' : 'Entrar'}
            icon={isSending ? <ActivityIndicator /> : null}
            style={{
              container: {
                backgroundColor: '#5304af',
                height: 45,
              },
              text: {
                color: '#ffffff',
                fontSize: 16,
              },
            }}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}
