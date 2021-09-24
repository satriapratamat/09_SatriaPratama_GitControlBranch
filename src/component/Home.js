import React, { useState } from "react";
import ListTodo from "./ListTodo";


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
        />
    </>
    );

}

export default Home