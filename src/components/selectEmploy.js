import React from 'react';
import './survey.css'



class SelectEmployee extends React.Component{
    constructor(){
        super();
        this.state ={

        }
    }

    

    render(){
        return (
            <div>
         <select className='ui search dropdown ownCss'>
            <i class="dropdown icon"></i>
            <option className='default text'>employee 1</option>
            <option value="saab">employee 2</option>
            <option value="mercedes">employee 3</option>
             <option value="audi">employee 4</option>
         </select>
            </div>



        )
    }
}

export default SelectEmployee;