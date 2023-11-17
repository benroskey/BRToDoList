import React from 'react';
import { View, TextInput, Button } from 'react-native';

const ToDoForm = ({ input, setInput, addTask }) => {
return (
    <View>
        <TextInput
            value={input}
            onChangeText={text => setInput(text)}
            placeholder="Add new task"
        />
    <Button title="Add Task" onPress={addTask} />
</View>
);
};

export default ToDoForm;