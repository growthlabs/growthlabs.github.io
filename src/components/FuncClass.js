import React from 'react';

const FunClass =()=> (
    <div> 


<h3> Exercise One </h3>
<h4> Turn all the presentational components into functional ones </h4>
   
<pre>
 {`
   var user = {     
    name='Tyler McGinnis'
    username='tylermcginnis'
    img='https://avatars0.githubusercontent.com/u/2933430?v=3&s=460'
}
    `}
  </pre>  

<pre>
{`
    class Avatar extends React.Component {
  render() {
    return (
      <img src={''} />
    )
  }
}

class Label extends React.Component {
  render() {
    return (
      <h1>Name: </h1>
    )
  }
}

class ScreenName extends React.Component {
  render() {
    return (
      <h3>Username: </h3>
    )
  }
}

class Badge extends React.Component {
  render() {
    return (
      <div>
        <Avatar />
        <Label />
        <ScreenName />
      </div>
    )
  }
}

class App extends Component{
    render(){
        return(
             <Badge  /> 
        )
    }

    }


    
    `}

</pre>   


<h3> Exercise Two </h3>
<h4>Define a method in your component called handleClick, pass that down as a prop and 
    trigger it when you click a button  </h4>
   

    </div>
)

export default FunClass; 