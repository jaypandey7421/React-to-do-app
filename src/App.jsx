import React from 'react'
import { useState } from 'react'
import EmptyDiv from './components/EmptyDiv';

export default function App() {
  const [input, setInput] = useState('');
  const [todoList, setTodoList] = useState([]);

  function handleChangeInput(e){
    setInput(e.target.value);
  }
  function addTodo(){
    if(input=== '') return;
    setTodoList([...todoList, input]);
    setInput('');
  }
  function deleteTodo(key){
    setTodoList(prevList => (
      prevList.filter((_, i) => i != key)
    ));
  }
  function editTodo(key){
    setInput(todoList[key]);
    setTodoList(prevList => prevList.filter((_, i) => i!= key));
  }

  return (
    <>
    <h1 className='main-header'>To-Do</h1>
    <section className="parent">
      <div className="to-do-container">
        <div className="input-container">
          <input 
            type="text"
            value={input}
            name='todo_input'
            id='todo_input'
            className='to-do-input'
            placeholder='your to-do'
            onChange={handleChangeInput} />
          <button onClick={addTodo}>+</button>
        </div>
        <hr />
        {todoList?.length === 0 && <EmptyDiv />}
        {todoList?.map((item, index)=> (
          <div className="to-do-item" key={index}>
            <p>{item}</p>
            <div className="item-ctrl">
              <button onClick={()=> deleteTodo(index)}>
                <i className="fa-regular fa-trash-can"></i>
              </button>
              <button onClick={()=> editTodo(index)}>
                <i className="fa-regular fa-pen-to-square"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}
