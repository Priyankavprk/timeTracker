import React, {PureComponent} from 'react';
import {View, Text, TouchableOpacity, FlatList, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {updateData} from '../../store/actions';
import TaskItem from '../../components/TaskItem';
import styles from './styles';

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filteredTasks: {},
    };
  }

  addTask = () => {
    this.props.updateData();
  };

  filterTasks = () => {
    const {task} = this.props;
    const {searchValue} = this.state;
    if (!searchValue || searchValue.trim() === '') {
      this.setState({
        filteredTasks: {},
      });
    } else {
      const filterTasks = Object.values(task).filter((item) =>
        item.name.startsWith(searchValue),
      );
      this.setState({
        filteredTasks: filterTasks,
      });
    }
  };

  render() {
    const {task} = this.props;
    const {filteredTasks} = this.state;
    const renderTask =
      Object.values(filteredTasks).length > 0
        ? Object.values(filteredTasks)
        : Object.values(task);
    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.search}
            numberOfLines={1}
            placeholder={'Search task'}
            onChangeText={(text) => this.setState({searchValue: text})}
            value={this.state.title}
          />
          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => this.filterTasks()}>
            <Text>Search</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Add your tasks</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => this.props.navigation.navigate('Details')}>
          <Text style={styles.buttonText}>Add Task</Text>
        </TouchableOpacity>
        <View>
          <FlatList
            data={renderTask}
            renderItem={({item}) => (
              <TaskItem item={item} navigation={this.props.navigation} />
            )}
            extraData={renderTask}
            contentContainerStyle={styles.listStyle}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateData: () => dispatch(updateData()),
  };
};

const mapStateToProps = (state) => ({
  task: state.timer.task,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
