import './App.css'
import React from 'react';
import cd from './image/logo.png';
import cdd from './image/coding.png';
import cddd from './image/reactjs.png';
// import Navebar from './components/Navebar';
// import  { Route, Router} from "react-router-dom";
// import Hero from './Hero';
// import {useNavigate} from "react-router-dom";
import './components/Navebar.css';
// import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {

  // const navi=useNavigate();

  // const signin=()=>{
  //   navi("/heros");
  // }
  return (
 <>
    {/* <div>
      <Navebar/>
    </div> */}
     <body className='bgimage'>
     <div>
        <h2>
          Welcome to<br/>
          <span className='clr'>Crystal Delta </span><br/>
          <span className='e'>e</span>-Learning
        </h2>
      </div>
     
    <div className='logo '>
        <img src={cd} alt="cd"/>
      </div>
      
    <div className='abc'>
      <div>
        <h6>
          Signin to your account!
        </h6>
      </div>
     
    
      <div className="input-container">
        <label>Username </label>
        <input type="text" name="uname" required />
     </div>
    
     <div className="input-container">
        <label>Password </label>
        <input type="password" name="pass" required />
     </div>
     
      <button  type="submit">Signin</button> 
      
       </div></body>


<section>
       <div className='sum'>
         <div className='logo1'>
         <img src={cd} alt="cd"/>
         </div>
         <ul className='ul1'>
              <li> All Courses </li>
              <li> My Dashboard </li>
        </ul>
       <div className='item'>
          <button className='but1' type="submit">Logout</button> 
       </div>
    </div>
    <div >
      <h3 className='shyam'> Greetings Shyam, <br/>
     <span className='shyamm'>Take a look into the list of all Courses</span></h3>
    </div>

<div class="grid-container">
  <div class="grid-item"><img className='boximg' src={cdd} alt="cdd"/><h4>React.js Basics</h4>
     <p>&nbsp;&nbsp;Course ID: CDL001</p>
     <br/>
     <br/>
     <p>
       Start Date:<br/>
       12-05-2022
       </p>
       <p className='end'>
         End Date:<br/>
         10-07-2022
         </p></div>
  <div class="grid-item"><img className='boximg' src={cddd} alt="cddd"/><h4>Node.js Basics</h4>
  <p>&nbsp;&nbsp;Course ID: CDL002</p>
     <br/>
     <br/>
     <p>
       Start Date:<br/>
       12-05-2022
       </p>
       <p className='end'>
         End Date:<br/>
         10-06-2022
         </p></div>
  <div class="grid-item"><img className='boximg' src={cdd} alt="cdd"/><h4>Python Tutorial</h4>
  <p>&nbsp;&nbsp;Course ID: CDL003</p>
     <br/>
     <br/>
     <p>
       Start Date:<br/>
       02-06-2022
       </p>
       <p className='end'>
         End Date:<br/>
         10-07-2022
         </p> </div>  
  <div class="grid-item"><img className='boximg' src={cddd} alt="cddd"/><h4>Automation Testing</h4>
  <p>&nbsp;&nbsp;Course ID: CDL004</p>
     <br/>
     <br/>
     <p>
       Start Date:<br/>
       20-05-2022
       </p>
       <p className='end'>
         End Date:<br/>
         07-08-2022
         </p> </div>
  <div class="grid-item"><img className='boximg' src={cdd} alt="cdd"/><h4>Agile Guide</h4>
  <p>&nbsp;&nbsp;Course ID: CDL005</p>
     <br/>
     <br/>
     <p>
       Start Date:<br/>
       12-05-2022
       </p>
       <p className='end'>
         End Date:<br/>
         10-07-2022
         </p> </div>
  <div class="grid-item"><img className='boximg' src={cddd} alt="cddd"/><h4>Devops Manual</h4>
  <p>&nbsp;&nbsp;Course ID: CDL006</p>
     <br/>
     <br/>
     <p>
       Start Date:<br/>
       03-05-2022
       </p>
       <p className='end'>
         End Date:<br/>
         25-06-2022
         </p> </div>  
  <div class="grid-item"><img className='boximg' src={cdd} alt="cdd"/><h4>Java & Spring Boot</h4>
  <p>&nbsp;&nbsp;Course ID: CDL007</p>
     <br/>
     <br/>
     <p>
       Start Date:<br/>
       29-05-2022
       </p>
       <p className='end'>
         End Date:<br/>
         18-07-2022
         </p> </div>
  <div class="grid-item"><img className='boximg' src={cddd} alt="cddd"/><h4>Angular Tutorial</h4>
  <p>&nbsp;&nbsp;Course ID: CDL008</p>
     <br/>
     <br/>
     <p>
       Start Date:<br/>
       27-05-2022
       </p>
       <p className='end'>
         End Date:<br/>
         18-07-2022
         </p> </div>
  
</div>
</section>



<section>
       <div className='sum'>
         <div className='logo1'>
         <img src={cd} alt="cd"/>
         </div>
         <ul className='ul1'>
              <li> All Courses </li>
              <li > My Dashboard </li>
        </ul>
       <div className='item'>
          <button className='but1' type="submit">Logout</button> 
       </div>
    </div>
    
    <div class="row">
  <div class="column">
  <div >
      <h3 className='shyam'> React js Basics<br/>
    <p className='shyammm'>
    Instructors: John Don, Steve Rogers<br/>
    Duration: 20 hours
       </p>
       <p className='end1' >
         Coures Starts:12-05-2022<br/>
         Course End:10-07-2022
         </p>
         </h3>
         
         <p className='para'>You can easily learn React JS within a month. You won't become an expert, but you'll be able to build applications that are working. After all, learning is absorbing information, and then using that information to make something work  <br/> Declarative views make your code more predictable and easier to debug.Build encapsulated components that manage their own state,then compose them tomake complex UIs. <br/> Since component logic is written in JavaScript insted of templates, you can easily pass rick data through your app and keep state out of the Dom.</p>
         <div className='enroll'><p><button>Enrole</button></p></div>
    </div>
    {/* <h2>Column 1</h2>
    <p>Some text..</p> */}
  </div>
  <div class="column">
    <div className='imgleft'>
      <img className="nnn"src={cdd} alt="cdd"/>
      </div>
  </div>
</div>

<div class="grid-container">
 
  
</div>
</section>



<section>
       <div className='sum'>
         <div className='logo1'>
         <img src={cd} alt="cd"/>
         </div>
         <ul className='ul1'>
              <li> All Courses </li>
              <li> My Dashboard </li>
        </ul>
       <div className='item'>
          <button className='but1' type="submit">Logout</button> 
       </div>
    </div>
    <div className='flex'>
    <div >
      <h3 className='shyam'> Greetings Shyam, <br/>
     <span className='shyamm'>Your Dashboard has list of your all Enroled courses</span></h3>
    </div>
    </div>
    

<div class="grid-container">
  <div class="grid-item"><img className='boximg' src={cdd} alt="cdd"/><h4>React.js Basics</h4>
     <p>&nbsp;&nbsp;Course ID: CDL001</p>
     <br/>
     <br/>
     <p>
       Start Date:<br/>
       12-05-2022
       </p>
       <p className='end'>
         End Date:<br/>
         10-07-2022
         </p></div> 
 
   <div class="grid-item"><img className='boximg' src={cddd} alt="cddd"/><h4>Angular Tutorial</h4>
  <p>&nbsp;&nbsp;Course ID: CDL008</p>
     <br/>
     <br/>
     <p>
       Start Date:<br/>
       27-05-2022
       </p>
       <p className='end'>
         End Date:<br/>
         18-07-2022
         </p> </div> 
  
</div>
</section>



<section>
       <div className='sum'>
         <div className='logo1'>
         <img src={cd} alt="cd"/>
         </div>
         <ul className='ul1'>
              <li> All Courses </li>
              <li> My Dashboard </li>
        </ul>
       <div className='item'>
          <button className='but1' type="submit">Logout</button> 
       </div>
    </div>
    
    <div class="row">
  <div class="column">
  <div >
      <h3 className='shyam'> React js Basics<br/>
    <p className='shyammm'>
    Instructors: John Don, Steve Rogers<br/>
    Duration: 20 hours
       </p>
       <p className='end1' >
         Coures Starts:12-05-2022<br/>
         Course End:10-07-2022
         </p>
         </h3>
         
         <p className='para'><br/>You can easily learn React JS within a month. You won't become an expert, but you'll be able to build applications that are working. After all, learning is absorbing information, and then using that information to make something work  <br/> Declarative views make your code more predictable and easier to debug.Build encapsulated components that manage their own state,then compose them tomake complex UIs. <br/> Since component logic is written in JavaScript insted of templates, you can easily pass rick data through your app and keep state out of the Dom.</p>
         <div className='enroll'><p><button>Unenrole</button></p></div>
    </div>
    {/* <h2>Column 1</h2>
    <p>Some text..</p> */}
  </div>
  <div class="column">
    <div className='imgleft'>
      <img className="nnn"src={cdd} alt="cdd"/>
      </div>
  </div>
</div>

<div class="grid-container">
  
</div>
</section>
  
</>
  );
}

export default App
