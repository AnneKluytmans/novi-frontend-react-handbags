import './App.css'
import Button from "./components/Button.jsx";
import Product from "./components/Product.jsx";
import bag1 from "./assets/bag_1.png";
import bag2 from "./assets/bag_2.png";
import bag3 from "./assets/bag_3.png";
import bag4 from "./assets/bag_4.png";

function App() {
  return (
      <>
        <h1>Handbags & Purses</h1>
        <nav>
          <Button text="to the collection" disabled="false"/>
          <Button text="shop all bags" disabled="false"/>
          <Button text="pre-orders" disabled="true"/>
        </nav>
        <main>
            <Product label="Best seller" image={bag1} altImage="the handy bag" name="The handy bag" price="€400,-"/>
            <Product label="Best seller" image={bag2} altImage="the stylish bag" name="The stylish bag" price="€250,-"/>
            <Product label="New collection" image={bag3} altImage="the simple bag" name="The simple bag" price="€300,-"/>
            <Product label="New collection" image={bag4} altImage="the trendy bag" name="The trendy bag" price="€150,-"/>
        </main>
      </>
  )
}

export default App
