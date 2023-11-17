import React from 'react';
import { Text } from 'react-native';

const ToDoList = ({ tasks }) => {
return
    (
    <View>
        {tasks.map((task, index) => (
        <Text key={index}>{task}</Text>))}
        </View>
    );
};

export default ToDoList;
