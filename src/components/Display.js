import React from "react";

// const Display = () => {
//     return(
//         <div className="App">

//         </div>
//     )
// }

class Display extends React.Component {
    constructor(){
        super();
        this.state = {
            inputValue: '',
            things: [],
        }
    }
    //this.state is an immutable object. If you did mutate state directly, you could have unintended side effects. this.setState is built into React to create a copy of something - and it changes the values that you put inside of it.
   
    updateThingArray = () => {
        let newArr = []
        newArr.push(this.state.inputValue)
        this.setState({
            things: newArr
        })
    }

    changeTheInput = (event) => {
        // console.log("CHANGE VALUE", event.target.value)
        this.setState({
            inputValue: event.target.value
        })
    }

    render() {
        console.log("STATE", this.state)
        let mappedArray = this.state.things.map(el => (
            <div>
                <h3>{el}</h3>
            </div>
        ))
        return(
            <div>
                <h1>Mo's Favorite Things</h1>
                <input onChange={(e) => this.changeTheInput(e)} type="text" value={this.state.inputValue} placeholder="type something"/>
                <button onClick={this.updateThingArray}>Click Here to Add</button>
                {/* <span>{JSON.stringify(this.state.things)}</span> */}
                {mappedArray}
            </div>
        )
    }
}

export default Display


//render is a function without the word function.
//return - we need the parentheses. We need to return one adjacent functional component.
//If you're wrapping the export in something (a package...e.g., Connect, Moment, etc.) it's probably better to do the export default at the bottom of the page; otherwise, it doesn't matter.
//State is always an object.
//React code base divided up into modules, separate components in separate files (to make it easier and clearer to read and manipulate).

//e in the input onChange...this.changeTheInput(e) is pointing to the whole Object. The event object.
//When adding an arrow function to a button or something - you don't have to do it as an arrow function if you're not passing in an argument. So button onClick={this.updateThingArray} will invoke the function if it's been defined above. If you need an argument, you'd write it like this: button onClick={(e) => this.updateThingArray(e)}, and you have to invoke it at the end. 

//If you learn to use the debugger well, employers (especially CS grads) often ike that.
//Put the debugger keyword in your code...and then breakpoint...something or other...
//Can also use console.log. 
//Get some tutoring in that.

//You don't often see JSON.stringify on websites. 
//Typically what we do to iterate over an array, is to 