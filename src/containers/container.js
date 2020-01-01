import React from 'react';
import '../components/survey.css'
import AssignedSurveys from '../components/assignedSurveys'
import SurveyList from '../components/surveyList'
import SelectEmployee from '../components/selectEmploy';
const surveys = [{s_name: 'uneducated People', city: 'moradabad', sex: '40%'},
                 {s_name: 'Brain', city: 'noida', sex: '40%'},
                 {s_name: 'Leena', city: 'Gurgaon', sex: '60%'},
                 {s_name: 'David', city: 'Bareilly', sex: '40%'},
                 {s_name: 'Aron', city: 'Delhi', sex: '40%'}]



class SurveyContainer extends React.Component{
    constructor(){
        super();
        this.state ={

        }
    }     




    render(){
        return (
            <div className='ui container'>
           <h1 style={{textAlign: 'center'}}>Select Employees</h1>
            <div className='surDrop'>
            <SelectEmployee/>
            </div>
           <div className='ui two column grid'>
         <div className='row'>
            <div className='column'>
            <SurveyList surveys={surveys}/>
            </div>
            <div className='column' >
            <AssignedSurveys/>
            </div> 
         </div>
         </div>
            </div>
        )
    }
}

export default SurveyContainer;

// .selEmp {
//     width: 223px;
//     font-size: 19px;
//     height: 42px;
//     /* margin: 0 auto; */
//     padding: 20px 0 500px 20;
//     margin: 20px 0 10px 500px;
// }