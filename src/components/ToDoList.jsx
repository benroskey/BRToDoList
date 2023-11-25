import React from 'react';
import { ScrollView, Text } from 'react-native';

const ToDoList = ({ tasks }) => {
return (
    <ScrollView scrollEnabled={true}>
        {tasks.map((task, index) => (
        <Text key={index}>{task}</Text>
        ))}
    </ScrollView>
    );
};

export default ToDoList;