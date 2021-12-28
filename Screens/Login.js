import React, {useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Input from '../Components/Input';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useState} from 'react/cjs/react.development';
import Home from './Home';
import styles from '../stylings';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const [loggedin, setLoggedin] = useState(false);
  const [userName, setUserName] = useState('');

  const userLoggedin = () => {
    let obj = {
      user: userName,
      userStatus: true,
    };
    AsyncStorage.setItem('userStatus', JSON.stringify(obj))
      .then(() => {
        setLoggedin(true);
      })
      .catch(err => console.log(err));
  };

  const checkUserStatus = () => {
    AsyncStorage.getItem('userStatus')
      .then(data => {
        if (data !== null) {
          let userData = {};
          userData = JSON.parse(data);
          setUserName(userData.user);
          setLoggedin(userData.userStatus);
          console.log(data, userData);
        }
      })
      .catch(err => console.log(err));
  };
  useEffect(() => {
    checkUserStatus();
  }, []);

  return (
    <>
      {loggedin ? (
        <Home userName={userName} />
      ) : (
        <>
          <View style={{flex: 1, backgroundColor: '#FB9893'}}>
            <ImageBackground
              source={require('../assets/bgImage.jpg')}
              style={styles.bgImage}
            />
            <View style={{flex: 1}}></View>
            <View style={styles.loginContainer}>
              <ScrollView>
                <View>
                  <Text style={styles.loginHeading}>Welcome back</Text>
                </View>

                <View>
                  <View style={styles.inputContainer}>
                    <Input
                      style={styles.mainInput}
                      placeholder="User Name"
                      onChangeText={e => setUserName(e)}
                    />
                    <Input
                      style={styles.mainInput}
                      placeholder="Password"
                      secureTextEntry={true}
                    />
                  </View>
                  <View style={styles.CheckContainer}>
                    <BouncyCheckbox
                      size={14}
                      fillColor="#FA7770"
                      text="Remember me"
                      textStyle={{fontSize: 14, textDecorationLine: 'none'}}
                      iconStyle={{borderColor: '#FA7770'}}
                    />
                    <TouchableOpacity>
                      <Text style={styles.forgetPass}>Forgot password</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View>
                  <View style={styles.bottomContainer}>
                    <Text style={styles.signInText}>Sign In</Text>
                    <TouchableOpacity onPress={userLoggedin}>
                      <View style={styles.iconContainer}>
                        <AntDesign
                          style={styles.arrowIcon}
                          name="arrowright"
                          size={20}
                          color="#cdcdcd"
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity>
                      <Text style={styles.signUpText}>Sign Up</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        </>
      )}
    </>
  );
};

export default Login;
