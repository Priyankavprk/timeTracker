import React, {PureComponent} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {addTask} from '../../store/actions';
import styles from './styles';

class Details extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.route.params?.data.name || '',
      details: this.props.route.params?.data.details || '',
      isEdit: this.props.route.params?.isEdit || false,
      id: this.props.route.params?.data.id || '',
    };
  }

  addTask = () => {
    const {title, details, isEdit, id} = this.state;
    if (isEdit) {
      this.props.updateTask(
        {
          name: title,
          details,
        },
        id,
      );
    } else {
      this.props.addTask({
        name: title,
        details,
        isStarted: false,
      });
    }
    this.props.navigation.goBack();
  };

  render() {
    const {isEdit} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Enter task details</Text>
        <View>
          <TextInput
            style={styles.title}
            numberOfLines={1}
            placeholder={'Enter task title'}
            onChangeText={(text) => this.setState({title: text})}
            value={this.state.title}
          />
          <TextInput
            style={styles.details}
            numberOfLines={2}
            placeholder={'Enter task details'}
            onChangeText={(text) => this.setState({details: text})}
            value={this.state.details}
          />
        </View>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => this.addTask()}>
          <Text style={styles.buttonText}>{isEdit ? 'Update' : 'Add'}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (data) => dispatch(addTask(data)),
    updateTask: (data, id) =>
      dispatch({
        type: 'UPDATE_TASK',
        payload: {
          data: {
            task: data,
            taskName: id,
          },
        },
      }),
  };
};

const mapStateToProps = (state) => ({
  task: state.timer.task,
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
