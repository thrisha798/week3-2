import React from 'react';
import './Inputs.css';

const Inputs = () => {
  return (
    <>
  <form action="/submit-form">
    
  <label for="title "><h1>Title</h1></label>
  <div className="title">
  <input type="text" id="title" name="title" placeholder='Title' size="25" /><br />
  </div>
  
  <label for="date"><h1>Date</h1></label>
  <div className="date">
  <input type="date" id="date" name="date" placeholder='Date' /><br />
  </div>
  
  <label for="body"><h1>Body</h1></label>
  <div className="body">
  <input type="text" id="body" name="body" placeholder='Body' /><br />
  </div>
  
<div className="submit">
  <input type="submit" value="Submit" />
  </div>
</form>




    </>
  );
};
export default Inputs;
