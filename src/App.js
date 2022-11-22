import './App.css'
import cake from './assets/cake.jpg'
import candy from './assets/candy.jpg'
import chocolate from './assets/chocolate.jpg'
import lollipops from './assets/lollipops.webp'
import marshmallows from './assets/marshmallows.jpg'
import Product from './components/Product'

function App() {

  const products = [
    { 
      title: 'marshmallows', price: 8, image: marshmallows
    },
    { 
      title: 'chocolate', price: 10, image: chocolate,
    },
    { 
      title: 'cake', price: 20, image: cake,
    },
    { 
      title: 'candy', price: 15, image: candy
    },
    { 
      title: 'lollipop', price: 5, image: lollipops,
    },
  ];

  const navToYoutube=()=>{
    window.open('https://youtu.be/SRcnnId15BA');
  }

  return (
    <div>
      <h2 className="app-name" onClick={navToYoutube}>My Shopping List</h2>
      {products.map(item=>{
         return <Product title={item.title} price={item.price} image={item.image}/>
      })}
    </div>
  );
}

export default App;
