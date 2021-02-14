import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';

import styles from './styles';

class TaskItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      sec: 0,
      min: 0,
      hr: 0,
    };
    this.intervalID = null;
  }

  getDisplayTime = () => {
    const {sec, min, hr} = this.state;
    let time = '';
    const hour = hr === 0 || hr < 10 ? `0${hr}` : `${hr}`;
    const minute = min === 0 || min < 10 ? `0${min}` : `${min}`;
    const second = sec === 0 || sec < 10 ? `0${sec}` : `${sec}`;
    time = `${hour}:${minute}:${second}`;
    return time;
  };

  tick = () => {
    const {sec, min, hr} = this.state;
    if (sec > 58) {
      this.setState((prevState) => {
        return {
          ...prevState,
          sec: 0,
          min: prevState.min + 1,
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          ...prevState,
          sec: prevState.sec + 1,
        };
      });
    }
    if (min > 58) {
      this.setState((prevState) => {
        return {
          ...prevState,
          min: 0,
          hr: prevState.hr + 1,
        };
      });
    }
  };

  handleButtonClick = () => {
    const {item, startTask, endTask} = this.props;
    if (item.isStarted) {
      clearInterval(this.intervalID);
      this.intervalID = null;
      endTask(item.name);
    } else {
      if (this.intervalID) {
        return;
      }
      startTask(item.name);
      this.intervalID = setInterval(() => this.tick(), 1000);
    }
  };

  render() {
    const {item, deleteTask} = this.props;
    return (
      <View style={styles.taskContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.details}>{item.details}</Text>
        <Text
          style={[
            styles.time,
            {color: item.isStarted ? '#252626' : '#C0CACD'},
          ]}>
          {this.getDisplayTime()}
        </Text>
        <TouchableOpacity
          onPress={() => this.handleButtonClick()}
          style={styles.button}>
          <Text style={styles.buttonText}>
            {this.props.item.isStarted ? 'End' : 'Start'}
          </Text>
        </TouchableOpacity>
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('Details', {data: item, isEdit: true})
            }>
            <Text style={styles.footerText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => deleteTask(item.name)}>
            <Text style={styles.footerText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startTask: (taskName) =>
      dispatch({
        type: 'START_TASK',
        payload: {
          taskName,
        },
      }),
    endTask: (taskName) =>
      dispatch({
        type: 'END_TASK',
        payload: {
          taskName,
        },
      }),
    deleteTask: (taskName) =>
      dispatch({
        type: 'DELETE_TASK',
        payload: {
          taskName,
        },
      }),
  };
};

const mapStateToProps = (state) => ({
  task: state.timer.task,
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
