import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  addButton: {
    borderRadius: 5,
    borderWidth: 1,
    width: 150,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#249DB5',
    borderColor: '#C5C8C9',
    alignSelf: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  container: {
    flex: 1,
    margin: 20,
  },
  title: {
    marginVertical: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
  listStyle: {
      marginBottom: 150,
      paddingBottom: 150,
  },
  search: {
    marginVertical: 10,
    fontSize: 14,
    borderWidth: 1,
    width: '70%',
    height: 40,
    borderRadius: 5,
    padding: 5,
  },
  searchContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
  },
  searchButton: {
      height: 40,
      width: "20%",
      justifyContent: 'center',
      alignItems: "center",
      borderRadius: 5,
      borderWidth: 1,
  }
});

export default styles;
