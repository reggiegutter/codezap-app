import React, {useState, useCallback, useEffect} from 'react';
import {View, SafeAreaView, Text, Image} from 'react-native';
import {Button, Icon} from 'react-native-material-ui';
import API from '../../config/api';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import Loader from 'react-native-modal-loader';
import Modal, {ModalContent} from 'react-native-modals';

import Trofeu from '../../images/trofeu.png';

export default function({navigation}) {
  const [isSending, setIsSending] = useState(false);
  const [questions, setQuestions] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const postChat = async () => {
      try {
        const sessionId = await AsyncStorage.getItem('@sessionId');
        const {data} = await API.post('/chat', {
          sessionId: sessionId,
        });

        setQuestions(data);
      } catch (error) {
        setQuestions(null);
      }
    };

    postChat();
  }, []);

  const sendRequest = useCallback(
    message => {
      const postChat = async () => {
        if (isSending) {
          return;
        }

        setIsSending(true);

        try {
          const sessionId = await AsyncStorage.getItem('@sessionId');
          const {data} = await API.post('/chat', {
            sessionId: sessionId,
            menssage: message,
          });

          setQuestions(data);

          if (data.output.generic[0].text === 'nivel3') {
            setModalVisible(true);
          } else {
            setModalVisible(false);
          }

          setIsSending(false);
        } catch (error) {
          setIsSending(false);
        }
      };

      postChat();
    },
    [isSending],
  );

  const backToHome = useCallback(() => {
    navigation.pop();
  }, [navigation]);

  return (
    <>
      <Loader loading={isSending} color="#5304af" />
      <View style={{flex: 1, paddingHorizontal: 15}}>
        <SafeAreaView style={{flex: 1}}>
          {questions && questions.output.generic.length >= 2 && (
            <View
              style={{
                paddingTop: 60,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={Trofeu}
                alt={questions.output.generic[1].title}
                style={{width: 80, height: 80}}
              />
              <Text
                style={{
                  fontSize: 28,
                  fontWeight: '700',
                  color: '#5304af',
                  textAlign: 'center',
                  marginTop: 10,
                }}>
                {questions.output.generic[1].title}
              </Text>
            </View>
          )}
          <View
            style={{
              paddingTop: 60,
              paddingBottom: 60,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {questions && (
              <Text
                style={{fontSize: 24, color: '#909090', textAlign: 'center'}}>
                {questions.output.generic[0].text}
              </Text>
            )}
          </View>
          <View style={{paddingHorizontal: 40}}>
            {questions && questions.output.generic.length >= 2 && (
              <>
                {questions.output.generic[1].options &&
                  questions.output.generic[1].options.map(item => (
                    <View key={item.label} style={{marginBottom: 25}}>
                      <Button
                        onPress={() => sendRequest(item.value.input.text)}
                        disabled={isSending}
                        primary
                        raised
                        text={item.label}
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
                  ))}
              </>
            )}
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
      <Modal
        visible={modalVisible}
        onTouchOutside={() => {
          this.setState({visible: false});
        }}>
        <ModalContent>
          <Text>asdaasda</Text>
        </ModalContent>
      </Modal>
    </>
  );
}
