import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ToDoForm = ({ addTask }) => {
    const [taskText, setTaskText] = useState('');

return (
    <View>
        <TextInput
            style={styles.input}
            placeholder="Add a new task..."
            onChangeText={(text) => setTaskText(text)}
            value={taskText}
        />
    <Button title="Add Task" onPress={() => addTask(taskText)} />
    </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        padding: 16,
        fontSize: 18,
        borderColor: 'gray',
        borderWidth: 1,
    }
});

export default ToDoForm;