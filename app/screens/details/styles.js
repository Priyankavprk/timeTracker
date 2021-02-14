import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  title: {
    marginVertical: 10,
    fontSize: 14,
    borderWidth: 1,
    width: '100%',
    height: 40,
    borderRadius: 5,
    padding: 5,
  },
  details: {
    marginVertical: 10,
    fontSize: 14,
    borderWidth: 1,
    width: '100%',
    height: 40,
    borderRadius: 5,
    padding: 5,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  addButton: {
    alignSelf: 'center',
    borderRadius: 5,
    borderWidth: 1,
    height: 30,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
});

export default styles;
