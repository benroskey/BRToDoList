import React, { useState } from 'react';
import { View, TextInput, Button, SafeAreaView,
    StatusBar,
    StyleSheet,
    useColorScheme} from 'react-native';

const styles = StyleSheet.create({ input: { height: 40, margin: 12, borderWidth: 1, } });


const ToDoForm = ({ input, setInput, addTask, setTaskText }) => {
const [taskText, setTaskText] = useState('');
const handleAddTask = () => {
    addTask(taskText);
    setTaskText('');
};
return (
    <View>
        <TextInput
            style={styles.input}
            placeholder="Add a new task..."
            onChangeText={(text) => setTaskText(text)}
            value={taskText}
        />
    <Button title="Add Task" onPress={handleAddTask} />
</View>
);
};

export default ToDoForm;