import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import styles from '../stylings';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({userName}) => {
  const [text, setText] = useState('');
  const [listData, setListData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [indexVal, setIndexVal] = useState(null);
  const [user, setUser] = useState(true);

  const loadTodos = () => {
    AsyncStorage.getItem('storedTodos')
      .then(data => {
        if (data !== null) {
          setListData(JSON.parse(data));
          console.log(data, 'Load Data SuccessFully😍');
        }
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    loadTodos();
  }, []);
  const handleClearTodos = () => {
    AsyncStorage.setItem('storedTodos', JSON.stringify([]))
      .then(() => {
        setListData([]);
      })
      .catch(err => console.log(err));
  };

  const add = () => {
    let date = moment().utcOffset('+05: 00').format('hh:mm a DD/MM/YYYY');
    if (isEdit) {
      setText(listData[indexVal].text);
      listData[indexVal].text = text;
      AsyncStorage.setItem('storedTodos', JSON.stringify(listData))
        .then(() => {
          setIsEdit(false);
          setText('');
          setIndexVal(null);
          console.log(listData, 'Edited Success👌');
        })
        .catch(err => console.log(err));
    } else {
      let obj = {
        text,
        date,
      };
      listData.push(obj);
      AsyncStorage.setItem('storedTodos', JSON.stringify(listData))
        .then(() => {
          setText('');
        })
        .catch(err => console.log(err));
    }
  };

  const editTodo = i => {
    setIsEdit(true);
    setIndexVal(i);
    setText(listData[i].text);
  };
  const deleteTodo = i => {
    let tempList = [...listData];
    tempList.splice(i, 1);
    setListData(tempList);
    AsyncStorage.setItem('storedTodos', JSON.stringify(tempList))
      .then(() => {})
      .catch(err => console.log(err));
  };

  const logout = () => {
    setUser(false);
    AsyncStorage.setItem('userStatus', JSON.stringify([]))
      .then(data => {
        if (data !== null) {
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <View style={styles.homeContainer}>
        <View style={[styles.flexRow, styles.flexBt, styles.homeUserInfo]}>
          <View>
            <Text
              style={[styles.fs20, styles.fw900, styles.mb10, styles.black]}>
              Hey, {userName}
            </Text>
            <Text>Let's Make this day productive</Text>
          </View>
          <View>
            <TouchableOpacity>
              <View style={styles.userIcon}>
                <EvilIcons
                  style={styles.arrowIcon}
                  name="user"
                  size={30}
                  color="#cdcdcd"
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={logout}>
              <Text style={(styles.black, styles.mt5)}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[{flex: 5}]}>
          <TouchableOpacity
            onPress={handleClearTodos}
            style={{alignItems: 'flex-end', marginHorizontal: 10}}>
            <View style={styles.clearAll}>
              <Text style={[{color: 'white'}]}>Clear all</Text>
            </View>
          </TouchableOpacity>
          <ScrollView>
            {listData.map((e, i) => (
              <View key={i} style={styles.todoContainer}>
                <View style={styles.todoBox}>
                  <View>
                    <Text style={[styles.mb10, {fontSize: 12}]}>{e.date}</Text>
                    <Text style={[styles.black, styles.fs18]}>{e.text}</Text>
                  </View>
                  <View style={{justifyContent: 'space-between'}}>
                    <TouchableOpacity onPress={() => editTodo(i)}>
                      <MaterialIcons name="edit" size={22} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => deleteTodo(i)}>
                      <MaterialIcons name="delete-forever" size={22} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={[styles.homeBottomContainer, {flex: 1}]}>
          <View style={{width: '80%', marginRight: 10}}>
            <TextInput
              value={text}
              placeholder="Add task"
              style={styles.bottomInput}
              onChangeText={e => setText(e)}
            />
          </View>
          <TouchableOpacity onPress={add}>
            <View style={styles.addIcon}>
              <MaterialIcons
                style={styles.arrowIcon}
                name="add"
                size={25}
                color="#cdcdcd"
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Home;
