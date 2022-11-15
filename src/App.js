import React, { Component } from 'react'

export class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: 'Allan'
        },
        {
          name: 'Rollen'
        },
        {
          name: 'Philip'
        },
        {
          name: 'Alcin'
        }
      ]
    }
  }
  render() {
    return (
      <div>
        {
          this.state.monsters.map((monster,index) => {
            return <h1 key={index}>{monster.name}</h1>
          })
        }
      </div>
    )
  }
}


export default App