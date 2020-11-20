import "./App.css";
import Person from "./Person/Person";
import React, { Component } from "react";
import styled from 'styled-components';
//import Radium, { StyleRoot } from "radium";
//import React, {useState} from 'react';

const StyledButton = styled.button`
      background-color: ${props => props.toggler ? 'red':'green'};
      font: inherit;
      border: 1px solid blue;
      padding: 8px;
      cursor: pointer;

      &:hover {
        background-color: ${props => props.toggler ? 'salmon':'lightgreen'};
        color: black;
      },
`;

class App extends Component {
  state = {
    persons: [
      { id: "a1", name: "Max", age: 28 },
      { id: "a2", name: "Mat", age: 23 },
      { id: "a3", name: "Meater", age: 20 },
    ],
    someState: "Some other value",
    showPersons: false,
  };

  switchNameHandler = (newName) => {
    //console.log('Was clicked');
    //Dont do this: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 24 },
        { name: "Mat", age: 23 },
        { name: "Meater", age: 25 },
      ],
    });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    //const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    const style = {
      backgroundColor: "green",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black",
      },
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Issac")}
          >
            Sketching is my hobby.
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            changed={this.nameChangedHandler}
          /> */}
        </div>
      );

      // style.backgroundColor = "red";
      // style[":hover"] = {
      //   backgroundColor: "salmon",
      //   color: "black",
      // };
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red"); // red classes
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      // <StyleRoot>
        <div className="App">
          <h1>Hi, React App</h1>
          <p className={classes.join(" ")}>This is working..??</p>
          <StyledButton toggler={this.state.showPersons} onClick={this.togglePersonsHandler}>
            Toggle Components
          </StyledButton>
          {persons}
        </div>
      //</StyleRoot>
    );
  }
}

/* const App = props => {
  const [ personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28},
      { name: 'Mat', age: 23},
      { name: 'Meater', age: 20}
    ]
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () =>{
    //console.log('Was clicked');
    //Dont do this: this.state.persons[0].name = 'Maximilian';
    setPersonsState({
      persons: [
        {name: 'Maximilian' ,age: 24},
        { name: 'Mat', age: 23},
        { name: 'Meater', age: 25}
      ]
    });
  }

  return (
    <div className="App">
      <h1>Hi, React App</h1>
      <p>This is working..??</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>Sketching is my hobby.</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  );
}
 */

//export default Radium(App);
export default App;