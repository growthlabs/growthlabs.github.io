import React, {Component} from 'react';

const Events =()=> (
    <div> 
    <h3> Exercise One</h3>
    <h4> Assign an onchange handler to a field and console log hello </h4>
    <pre>
    {
        `      
        class App extends Component {

        render(){
            return(
                 <button> Console log hello </button>

            )
         }
        }
        `
    }
    </pre>    

    <h3> Exercise Two</h3>
    <h4> Assign an onchange handler to an input field that updates the state </h4>
    <h4> Display that state in your app somewhere in a separate component e.g. {`<Text />`}  </h4>
   <pre>
    {
        `      
        class App extends Component {

        render(){
            return(
                 <input> Console log hello </input>

            )
         }
        }
        `
    }
    </pre>

     </div>
)

export default Events; 