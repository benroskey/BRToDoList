import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

const App = () => {
  const [tasks, setTasks] = useState([
  'Do laundry',
  'Go to gym',
  'Walk dog'
]);

const addTask = (taskText) => {
setTasks([...tasks, taskText]);
};

return (
  <ScrollView scrollEnabled={true}>
    <ToDoList tasks={tasks} />
    <ToDoForm addTask={addTask} />
  </ScrollView>
  );
};

export default App;