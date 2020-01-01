import React from 'react';
import './survey.css'




class SurveyList extends React.Component{
    constructor(){
        super();
        this.state ={

        }
    }

    renderSurveys = ()=> {
        const {surveys} = this.props
        console.log(surveys)
        !!surveys && surveys.map((survey, index)=>{
            return (
                <li></li>
            )
        })
    }


    render(){
        return (
            <div class="ui inverted segment">
  <div class="ui inverted relaxed divided list">
    <div class="item">
     
      An excellent companion
    </div>
  
  <div class="item">
   
    
      A poodle, its pretty basic
  <button className='ui primary button add'>Add</button>
  </div>
  <div class="item">
   
     
      He's also a dog
    </div>
 
  </div>
</div>



        )
    }
}

export default SurveyList;