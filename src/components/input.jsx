    import React from 'react';
    import {} from '../assets/Styles/App.css'
    
    
    function Input(label,errorMsg,className,optional=false,...rest){
      <div className={`flex flex-col ${className}`}>
        <div className="w-full flex justify-between items-baseline">
          <label
            className="shadow h-12 w-64">
            
          </label>
          {optional && <span className="text-blue italic text-xs">optional</span>}
        </div>
    
        <input
          {...rest}
          className="input-text"/>
    
        <p className="text-red-500 text-xs italic">{errorMsg}</p>
      </div>
    };
    
    export default Input;
    
    

 
