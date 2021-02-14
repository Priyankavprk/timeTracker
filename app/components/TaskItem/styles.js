import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  taskContainer: {
    borderRadius: 10,
    height: 120,
    width: '100%',
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 12,
  },
  time: {
    position: 'absolute',
    top: 30,
    right: 20,
  },
  startTime: {
    position: 'absolute',
    top: 10,
    right: 20,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  button: {
    height: 25,
    width: 50,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 10,
  },
  footer: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
  },
  footerText: {
    paddingHorizontal: 10,
    color: '#F9021C',
  },
});

export default styles;
