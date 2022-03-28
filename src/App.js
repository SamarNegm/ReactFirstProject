import './App.css';
import Card from './componants/Card'
import Header from './componants/Header';
import Slider from './componants/Slider';
import Footer from './componants/Footer';
import Counter from './componants/Counter';
function App() {
  let products = [{ "Title": "product1", "price": "40" }, { "Title": "product2", "price": "30" },
  { "Title": "product3", "price": "50" }, { "Title": "product4", "price": "40" },
  { "Title": "product5", "price": "560" }, { "Title": "product6", "price": "450" }
  ]
  return (
    <>

      <Header />
      <Slider />
      <div className=" text-center row " >
        <Counter></Counter>

      </div>
      <div className=" text-center row " >
        {
          products.map((product, index) => {
            return <Card key={index} Title={product.Title}
              price={product.price}

            />

          })
        }

      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
