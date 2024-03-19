import React , {useState} from 'react';
import './App.css';
import { PasswordService } from './PasswordService';


let App = () => {

  let [state , setState] =   useState({
      generatedPassword: '',
      passwordLength: 20,
      symbol: false,
      number: false,
      lower: false,
      upper: false,
  });

  let updateInput = (event) => {
    setState({
      ...state,
      [event.target.name] : event.target.value,
    });
  };

  let updateCheck = (event) => {
    setState({
      ...state,
      [event.target.name] : event.target.checked
    });
  };

  let submit = (event) => {
       event.preventDefault();
       let passwordObj = PasswordService.getPasswordObj(state);
       let thePassword = PasswordService.generatePassword(passwordObj , state.passwordLength);
       setState({...state , generatedPassword: thePassword });
  };

  return (
   <>
    <div className='container mt-5'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='card shadow-lg'>
                <div className='card-header bg-grey p-3'>
                  <p className='h4'> Password Generator</p>
                </div>
                <div className='card-body bg-grey'>
                  <form onSubmit={submit}>
                    <div className='mb-2'>
                      <div className='input-group'>
                        <span className='input-group-text'>Password</span> 
                        <input 
                         onChange= {updateInput}
                         type='text'
                          className='form-control' 
                          placeholder="Generated Password"
                          value={state.generatedPassword}/>
                        <span className = 'input-group-text'><i className='fa fa-clipboard'></i></span>
                      </div>
                    </div>
                    <div className='mb-2'>
                      <div className='input-group'>
                        <input 
                         required = {true}
                         value = {state.passwordLength}
                         onChange = {updateInput}
                         name='passwordLength'
                         type='number' className='form-control' placeholder='Password length'/>
                        <span className='input-group-text'>Length</span>
                      </div>
                    </div>
                    <div className='mb-2'>
                       <div className='input-group'>
                        <span className='input-group-text bg-white'>
                          <input                                         
                           onChange = {updateCheck} 
                           name='number'
                          type="checkbox" className='form-check-input'/>
                        </span>
                        <input type='text' disabled={true} className='form-control' placeholder='Numbers'/>
                       </div>
                    </div>
                    <div className='mb-2'>
                       <div className='input-group'>
                        <span className='input-group-text'>
                          <input 
                          onChange = {updateCheck}
                          name='symbol'
                          type="checkbox" className='form-check-input'/>
                        </span>
                        <input type='text' disabled={true} className='form-control' placeholder='Symbols'/>
                       </div>
                    </div>
                    <div className='mb-2'>
                       <div className='input-group'>
                        <span className='input-group-text'>
                          <input
                          onChange = {updateCheck}
                          name='lower'
                           type="checkbox" className='form-check-input'/>
                        </span>
                        <input type='text' disabled={true} className='form-control' placeholder='Lower-Case-Letters'/>
                       </div>
                    </div>
                    <div className='mb-2'>
                       <div className='input-group'>
                        <span className='input-group-text'>
                          <input 
                          onChange = {updateCheck}
                          name='upper'
                          type="checkbox" className='form-check-input'/>
                        </span>
                        <input type='text' disabled={true} className='form-control' placeholder='Upper-Case-Letters'/>
                       </div>
                    </div>
                    <div className='mb-2'>
                      <input type='submit' value ='Generate' className='btn btn-outline-dark'/>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
    </div>
   </>
  );
}

export default App;
