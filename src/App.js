import cake from './assets/cake.jpg'
import candy from './assets/candy.jpg'
import chocolate from './assets/chocolate.jpg'
import lollipops from './assets/lollipops.webp'
import marshmallows from './assets/marshmallows.jpg'

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

  return (
    <div>
      <h2>My Shop</h2>
    </div>
  );
}

export default App;
