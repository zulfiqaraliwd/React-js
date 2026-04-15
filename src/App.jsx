import logo from './logo.svg';
import './App.css';
import products from './utils/products';

function App() {
  return (
   <>
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
  products.map((product)=>{
return (
<>
<h1>Name :{product.name}</h1>
<p>Brand :{product.brand}</p>
<p>Price :{product.price}</p>
</>
)

  })
}



   </>
     
    
  );
}

export default App;
