import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

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

  onStart = () => {
    this.intervalID = setInterval(() => this.tick(), 1000);
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

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>name</Text>
        <Text>detail</Text>
        {this.props.item.isStarted && <Text>{this.getDisplayTime()}</Text>}
        <TouchableOpacity onPress={() => this.onStart()}>
          <Text>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => clearInterval(this.intervalID)}>
          <Text>End</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default TaskItem;
