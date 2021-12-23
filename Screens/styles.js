import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  bgImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  mainConatiner: {
    height: '100%',
    width: '100%',
    backgroundColor: '##FB9893',
  },
  loginContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    marginTop: 200,
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
    marginTop: 80,
  },
  Input: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    marginBottom: 10,
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
});

export default styles;
