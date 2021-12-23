import React from 'react';
import {View, Text, ImageBackground, ScrollView} from 'react-native';
import Login from './Screens/Login';
import styles from './Screens/styles';

const App = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.mainConatiner}>
          <ImageBackground
            source={require('./assets/bgImage.jpg')}
            style={styles.bgImage}
          />
          <Login />
        </View>
      </ScrollView>
    </>
  );
};

export default App;
