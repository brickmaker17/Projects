import React, { Component } from 'react'

class Toggle extends Component {
    constructor(props){
        super(props);
        this.state = {
            switchs: false
        }
        this.handleclick = this.handleclick.bind(this);
    }
    handleclick(){
      this.setState( (prevstate)=> {return {switchs: !prevstate.switchs}})
    }
    render(){
        // let { switchs } = this.state
        return(
            
            <div>
                <button onClick={this.handleclick}>toggle</button>
                {this.state.switchs && <Child />}
            </div>
        )
    }
}
const Child = () => (
    <div>
        Hello World!
    </div>
)
export default Toggle;