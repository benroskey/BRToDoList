import React from 'react';
import { SafeAreaView, Button } from 'react-native';

import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';

function Home ({navigation }){
        const [tasks, setTasks] = React.useState([
        'Do laundry',
        'Go to gym',
        'Walk dog'
    ]);
    
    const addTask = (taskText) => {

        // const newTasks = tasks;

        // newTasks.push(taskText);

        // setTasks(newTasks);

    setTasks([...tasks, taskText]);
    };
    return(
        <>
        <SafeAreaView>
            <ToDoList tasks={tasks} />
            <ToDoForm addTask={addTask} />

            <Button
                title = "Go to About"
                onPress = {() => navigation.navigate('About')}
            />
        </SafeAreaView>
        </>
    )
    
};
export default Home;