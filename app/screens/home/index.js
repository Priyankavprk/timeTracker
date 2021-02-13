import React, {PureComponent} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {updateData} from '../../store/actions';
import TaskItem from "../../components/TaskItem";

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderTasks = () => {
    return (
      <FlatList
        data={this.props.task}
        renderItem={({item}) => <TaskItem item={item}/>}
        extraData={this.props.task}
      />
    );
  };

  addTask = () => {
    console.log("clicked")
    this.props.updateData();
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text>Add your tasks</Text>
        <TouchableOpacity onPress={() => this.addTask()}>
          <Text>Add Task</Text>
        </TouchableOpacity>
        <View>{this.renderTasks()}</View>
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
