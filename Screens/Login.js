import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import Input from '../Components/Input';
import styles from './styles';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Login = () => {
  return (
    <View style={styles.loginContainer}>
      <View>
        <Text style={styles.loginHeading}>Welcome back</Text>
      </View>
      <View style={styles.inputContainer}>
        <Input placeholder="E-mail" />
        <Input placeholder="Password" />
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
      <View style={styles.bottomContainer}>
        <Text style={styles.signInText}>Sign In</Text>
        <TouchableOpacity>
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
  );
};

export default Login;
