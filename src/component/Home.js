import React, { useState } from "react";
import ListTodo from "./ListTodo";
import TodoInput from "./TodoInput";


function Home() {
    const [todos, setTodos] = useState([]);
    
    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
        return;
    }
    
    const newTodos = [todo, ...todos];
    
    setTodos(newTodos);
    console.log(...todos);
};
    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };
    
    const removeTodo = id => {
        const removedArr = [...todos].filter(todo => todo.id !== id);
        
        setTodos(removedArr);
    };
    
    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };
    
    return (
    <>
        <p className="title-name">.todos</p>
        <TodoInput onSubmit={addTodo} />
        <ListTodo
            todos={todos}
            completeTodo={completeTodo}
            updateTodo={updateTodo}
            removeTodo={removeTodo}/>
    </>
    );

}

export default Home