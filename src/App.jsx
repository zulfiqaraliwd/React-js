
import products from './utils/products';
import { useState } from 'react';
import Input from './component/Input';
import Button from './component/Button';
import Heading ,{Heading22,Field}from './component/Heading';
import Navbar from './component/Navbar';
import Navigation from './routing/Navigation';
import { newStudents } from './utils/newStudent';


function App() {

const [counter , setCounter] = useState(0);

  return (
   <>
<Navbar/>
<Navigation />
     
    <Input name = "Zulfiqar"  age = {77}/>
<Input name = "Ali"  age = {88}/>
<Button btn = "click"/>
<Button btn = "contact"/>
<Heading />
<Heading22 />
<Field />
   <h1>react first app</h1>
   <h2>react version 19</h2>

   <ol>
<li>one</li>
<li>two</li>
<li>three</li>
<li>four</li>

   </ol>

   <em>the text is italic</em> <br /> <hr />

   <b>bold is also here</b><br />

   <button>click me</button>

   <p>now below are the those which i created from react components</p>
   

{
  products.map(({name,brand,price})=>{
return (
<>
<h1>Name :{name}</h1>
<p>Brand :{brand}</p>
<p>Price :{price}</p>
</>
)

  })
}

<h1> You type {counter} times</h1>
<button onClick={()=>setCounter(counter+1)}>click</button>

<hr />
<hr />

<Button btn = "001"/>
<Button btn = "022"/>
<Button btn = "333"/>


{
  newStudents.map((e) => {
    return(
    <div>
      <h1>Name is {e.name}</h1>
      <h2>Class is {e.class}</h2>
      <h2>Roll No is {e.rollNo}</h2>
    </div>)
})
}


   </>
       
  );
}

export default App;
