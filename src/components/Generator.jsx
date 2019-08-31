import React, { useState } from 'react';
import { generate } from '../actions/generate';

const Generator = () => {
  let [alertState, setAlertState] = useState({
    active: true,
    type: 'default',
    title: '',
    text: 'Click the button to generate a code'
  })
  let [code, setCode] = useState(''); 

  const handleGenerate = () => {
    setAlertState({
      active: true,
      type: 'default',
      title: '',
      text: 'Generating...'
    })
    generate()
      .then((code) => {
        setAlertState(
          { 
            active: true, 
            type: 'success', 
            title: 'Success!', 
            text: 'Code succesfully generated' 
          }
        );
        setCode(code);
      })
      .catch(err => setAlertState(
        {
          active: true, 
          type: 'danger', 
          title: 'Oops!', 
          text: 'Something went wrong' 
        }
      ));
  }

  return (
    <div className="main-wrapper text-center"> 
      <div className="row">
        <div className="col">
          { alertState.active && 
          (
          <div className={ `alert alert-${alertState.type}` } role="alert">
            <strong>{alertState.title}</strong> {alertState.text}
          </div>
          )
          }
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
        <input 
            readOnly
            type="text" 
            value={code} 
            className="form-control code-container" 
            placeholder={'X'.repeat(20)}
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
        <button 
          type="button" 
          className="btn btn-primary" 
          onClick={handleGenerate}
        >
            Generate
        </button>
        </div>
      </div>
    </div>
  )
}

export default Generator;
