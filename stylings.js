import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  bgImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  loginContainer: {
    flex: 2,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 35,
  },
  loginHeading: {
    color: '#FA7770',
    fontSize: 45,
    fontWeight: 'bold',
    marginTop: 20,
  },
  inputContainer: {
    marginTop: 40,
  },
  Input: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    marginBottom: 5,
  },
  CheckContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  forgetPass: {
    color: '#FA7770',
    textDecorationLine: 'underline',
    fontSize: 14,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 80,
  },
  signInText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FA7770',
  },
  iconContainer: {
    backgroundColor: '#FA7770',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowIcon: {
    color: '#fff',
  },
  signUpText: {
    color: '#FA7770',
    textDecorationLine: 'underline',
  },
  homeContainer: {
    flex: 1,
    backgroundColor: '#FA777040',
  },
  userIcon: {
    backgroundColor: '#FA7770',
    width: 40,
    height: 40,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  todoContainer: {
    marginBottom: 16,
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 9,
  },
  todoBox: {
    borderLeftWidth: 3,
    borderColor: '#FA7770',
    paddingHorizontal: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  homeUserInfo: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  homeBottomContainer: {
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainInput: {
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
    marginBottom: 5,
  },
  bottomInput: {
    borderColor: '#e0e0e0',
    marginBottom: 5,
    borderRadius: 25,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  addIcon: {
    backgroundColor: '#FA7770',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearAll: {
    backgroundColor: '#FA7770',
    width: '20%',
    marginLeft: 10,
    padding: 5,
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: 10,
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexBt: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  black: {
    color: '#030303',
  },
  fs12: {
    fontSize: 12,
  },
  fs18: {
    fontSize: 18,
  },
  fs20: {
    fontSize: 20,
  },
  fw900: {
    fontWeight: '900',
  },
  mt5: {
    marginTop: 5,
  },
  mb10: {
    marginBottom: 15,
  },
  mb20: {
    marginBottom: 20,
  },
  bt: {
    borderTopWidth: 1,
  },
  bb: {
    borderBottomWidth: 1,
  },
  bcolor: {
    borderColor: '#DCDCDC',
  },
});

export default styles;
