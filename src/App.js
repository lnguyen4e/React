import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons:[
      {name:'Max',age:28},
      {name:'Manu',age:29},
      {name:'Stephanie',age:26}
    ]
  });
  const switchNameHandler = (newName)  =>{
    setPersonsState({
      persons:[
        {name:newName, age:28},
        {name:'Manu',age:29},
        {name:'Stephanie',age:27}
      ]
    });
    
  };
  const nameChangeHandler=(event)=>{

    setPersonsState({
      persons:[
        {name:'Max', age:28},
        {name:event.target.value,age:29},
        {name:'Stephanie',age:27}
      ]
    });
  }
    
   
    return (
      <div className="App">
        <h1>Hi, I am React</h1>
        <button onClick={switchNameHandler.bind(this, 'max!!')}>Switch Name</button>
        <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age}/>
        <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age}
        click= {switchNameHandler.bind(this, 'Maximilia')}
        changed={nameChangeHandler}>Hobby: Playing Video Game </Person>
        <Person 
        name={personsState.persons[2].name} 
        age={personsState.persons[2].age}/>

      </div>
      );
  
};

export default app;
