import React, {useState, useCallback} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Loader from 'react-native-modal-loader';

import API from '../../config/api';
import Egg from '../../images/egg.png';

export default function({navigation}) {
  const [isSending, setIsSending] = useState(false);

  const getChat = useCallback(
    level => {
      const fetchChat = async () => {
        if (isSending) {
          return;
        }

        setIsSending(true);

        try {
          const {data} = await API.get('/chat');
          await AsyncStorage.setItem('@sessionId', data.session_id);

          setIsSending(false);

          navigation.navigate({
            routeName: 'Questions',
          });
        } catch (error) {
          await AsyncStorage.setItem('@sessionId', null);
          setIsSending(false);
        }
      };

      fetchChat();
    },
    [isSending, navigation],
  );

  return (
    <>
      <Loader loading={isSending} color="#5304af" />
      <View style={{flex: 1}}>
        <SafeAreaView style={{flex: 1}}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            style={{
              paddingHorizontal: 15,
              paddingTop: 20,
            }}
            contentContainerStyle={{paddingBottom: 60}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableWithoutFeedback onPress={() => getChat('level1')}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                  }}>
                  <View
                    style={{
                      width: 90,
                      height: 90,
                      borderRadius: 45,
                      backgroundColor: '#0092cc',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image
                      source={Egg}
                      resizeMode="contain"
                      style={{width: 70}}
                    />
                  </View>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#606060',
                      fontSize: 16,
                      marginTop: 10,
                      fontWeight: '700',
                    }}>
                    Nível 1
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: 20,
              }}>
              <TouchableWithoutFeedback onPress={() => getChat('level2')}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                  }}>
                  <View
                    style={{
                      width: 90,
                      height: 90,
                      borderRadius: 45,
                      backgroundColor: '#0092cc',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image
                      source={Egg}
                      resizeMode="contain"
                      style={{width: 70}}
                    />
                  </View>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#606060',
                      fontSize: 16,
                      marginTop: 10,
                      fontWeight: '700',
                    }}>
                    Nível 2
                  </Text>
                </View>
              </TouchableWithoutFeedback>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: 10,
                }}>
                <View
                  style={{
                    width: 90,
                    height: 90,
                    borderRadius: 45,
                    backgroundColor: '#909090',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={Egg}
                    resizeMode="contain"
                    style={{width: 70}}
                  />
                </View>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#606060',
                    fontSize: 16,
                    marginTop: 10,
                    fontWeight: '700',
                  }}>
                  Nível 3
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: 20,
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: 10,
                }}>
                <View
                  style={{
                    width: 90,
                    height: 90,
                    borderRadius: 45,
                    backgroundColor: '#909090',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={Egg}
                    resizeMode="contain"
                    style={{width: 70}}
                  />
                </View>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#606060',
                    fontSize: 16,
                    marginTop: 10,
                    fontWeight: '700',
                  }}>
                  Nível 4
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: 10,
                }}>
                <View
                  style={{
                    width: 90,
                    height: 90,
                    borderRadius: 45,
                    backgroundColor: '#909090',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={Egg}
                    resizeMode="contain"
                    style={{width: 70}}
                  />
                </View>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#606060',
                    fontSize: 16,
                    marginTop: 10,
                    fontWeight: '700',
                  }}>
                  Nível 5
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: 10,
                }}>
                <View
                  style={{
                    width: 90,
                    height: 90,
                    borderRadius: 45,
                    backgroundColor: '#909090',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={Egg}
                    resizeMode="contain"
                    style={{width: 70}}
                  />
                </View>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#606060',
                    fontSize: 16,
                    marginTop: 10,
                    fontWeight: '700',
                  }}>
                  Nível 6
                </Text>
              </View>
            </View>
            <View style={{paddingBottom: 20, paddingTop: 90}}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: '#f5f5f5',
                  paddingTop: 10,
                  paddingBottom: 30,
                  borderRadius: 8,
                }}>
                <View
                  style={{
                    width: 110,
                    height: 110,
                    borderRadius: 55,
                    backgroundColor: '#5304af',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 15,
                    borderColor: '#ffffff',
                    position: 'absolute',
                    marginTop: -60,
                    marginLeft: Dimensions.get('window').width / 3.5,
                  }}>
                  <Image
                    source={Egg}
                    resizeMode="contain"
                    style={{width: 60}}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingTop: 60,
                  }}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingHorizontal: 10,
                    }}>
                    <View
                      style={{
                        width: 90,
                        height: 90,
                        borderRadius: 45,
                        backgroundColor: '#909090',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Image
                        source={Egg}
                        resizeMode="contain"
                        style={{width: 70}}
                      />
                    </View>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: '#606060',
                        fontSize: 16,
                        marginTop: 10,
                        fontWeight: '700',
                      }}>
                      Nível 7
                    </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingHorizontal: 10,
                    }}>
                    <View
                      style={{
                        width: 90,
                        height: 90,
                        borderRadius: 45,
                        backgroundColor: '#909090',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Image
                        source={Egg}
                        resizeMode="contain"
                        style={{width: 70}}
                      />
                    </View>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: '#606060',
                        fontSize: 16,
                        marginTop: 10,
                        fontWeight: '700',
                      }}>
                      Nível 8
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingTop: 20,
                  }}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingHorizontal: 10,
                    }}>
                    <View
                      style={{
                        width: 90,
                        height: 90,
                        borderRadius: 45,
                        backgroundColor: '#909090',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Image
                        source={Egg}
                        resizeMode="contain"
                        style={{width: 70}}
                      />
                    </View>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: '#606060',
                        fontSize: 16,
                        marginTop: 10,
                        fontWeight: '700',
                      }}>
                      Nível 9
                    </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingHorizontal: 10,
                    }}>
                    <View
                      style={{
                        width: 90,
                        height: 90,
                        borderRadius: 45,
                        backgroundColor: '#909090',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Image
                        source={Egg}
                        resizeMode="contain"
                        style={{width: 70}}
                      />
                    </View>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: '#606060',
                        fontSize: 16,
                        marginTop: 10,
                        fontWeight: '700',
                      }}>
                      Nível 10
                    </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingHorizontal: 10,
                    }}>
                    <View
                      style={{
                        width: 90,
                        height: 90,
                        borderRadius: 45,
                        backgroundColor: '#909090',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Image
                        source={Egg}
                        resizeMode="contain"
                        style={{width: 70}}
                      />
                    </View>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: '#606060',
                        fontSize: 16,
                        marginTop: 10,
                        fontWeight: '700',
                      }}>
                      Nível 11
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </>
  );
}
