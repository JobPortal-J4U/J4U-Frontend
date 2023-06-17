import React from 'react'
import { useState } from 'react';
import Modal from './Modal';

const Todo = () => {

    const [isModelOpen, setModelOpen] = useState(false);

    function deleteHandler() {
        console.log('clicked')
        setModelOpen(true);
      }
    
      function closeModalhandler(params) {
        setModelOpen(false);
      }
    
    

  return (
    <div>
        <p>TODO</p>
        <button onClick={deleteHandler}>Bla</button>
        {isModelOpen && <Modal  onCancel={closeModalhandler} onConfirm={closeModalhandler}/>}
    </div>
  )
}

export default Todo