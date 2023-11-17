import ToDoForm from 'ToDoForm';
import ToDoList from 'ToDoList';
import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

function App() {
const isDarkMode = useColorScheme() === 'dark';

const backgroundStyle = {
  backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
};

const [tasks, setTasks] = useState([
  'Do laundry',
  'Go to gym',
  'Walk dog',
])


return (
  <SafeAreaView style={backgroundStyle}>
    <StatusBar
      barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      backgroundColor={backgroundStyle.backgroundColor}
    />
    <ToDoList tasks={tasks} />
    <ToDoForm input={input} setInput={setInput} addTask={addTask} />
  </SafeAreaView>
);
};
const styles = StyleSheet.create({
sectionContainer: {
  marginTop: 32,
  paddingHorizontal: 24,
},
sectionTitle: {
  fontSize: 24,
  fontWeight: '600',
},
sectionDescription: {
  marginTop: 8,
  fontSize: 18,
  fontWeight: '400',
},
highlight: {
  fontWeight: '700',
},
});

export default App;