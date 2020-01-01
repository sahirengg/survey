import React from 'react';
import SurveyContainer from './containers/container';





class App extends React.Component{
    constructor(){
        super();
        this.state ={

        }
    }




    render(){
        return (
            <div className='ui container'>
            <SurveyContainer/>
            </div>
        )
    }
}

export default App;