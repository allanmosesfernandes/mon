import React, { Component } from 'react'

export class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchString: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState(() => {
      return { monsters:users }
    }))
  }
  render(){
              const filteredMonsters = this.state.monsters.filter((monster) => {
              return monster.name.toLocaleLowerCase().includes(this.state.searchString)
          })
    return (
      <div>
        <input 
          className='search-box' 
          type='search' 
          placeholder='Enter your monster name here' 
          onChange={(event) => {
            const searchString = event.target.value.toLocaleLowerCase();
            console.log(filteredMonsters)
            this.setState(() => {
              return {searchString}
            })
          }}
        />
        {
            filteredMonsters.map((monster,index) => {
              return <h1 key={index}>{monster.name}</h1>
            })
        }
      </div>
    )
  }}


export default App