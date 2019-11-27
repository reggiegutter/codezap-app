import React, {useState, useCallback} from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import {Button, Icon} from 'react-native-material-ui';
import API from '../../config/api';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

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
      } catch (error) {
        setIsSending(false);
      }
    };

    fetchChat();
  }, [isSending]);

  const backToHome = useCallback(() => {
    navigation.pop();
  }, [navigation]);

  return (
    <View style={{flex: 1, paddingHorizontal: 15}}>
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            paddingTop: 60,
            paddingBottom: 80,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 24, color: '#909090'}}>
            Uma pergunta teste?
          </Text>
        </View>
        <View style={{paddingHorizontal: 40}}>
          <View>
            <Button
              onPress={sendRequest}
              disabled={isSending}
              primary
              raised
              text="Opção 1"
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
          <View style={{marginTop: 25}}>
            <Button
              onPress={sendRequest}
              disabled={isSending}
              primary
              raised
              text="Opção 2"
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
        </View>
      </SafeAreaView>
      <View
        style={{
          position: 'absolute',
          width: 60,
          height: 60,
          borderRadius: 30,
          backgroundColor: '#5304af',
          alignItems: 'center',
          justifyContent: 'center',
          bottom: 40,
          right: 15,
          elevation: 1,
          shadowOffset: {width: 0, height: 1},
          shadowColor: '#000000',
          shadowOpacity: 1.0,
        }}>
        <TouchableWithoutFeedback onPress={backToHome}>
          <Icon name="close" color="#ffffff" />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}
