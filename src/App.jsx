import './App.css'
import Button from "./components/Button.jsx";
import Product from "./components/Product.jsx";
import Tile from "./components/Tile.jsx";
import bag1 from "./assets/bag_1.png";
import bag2 from "./assets/bag_2.png";
import bag3 from "./assets/bag_3.png";
import bag4 from "./assets/bag_4.png";
import brand from "./assets/brand.png";
import ourStory from "./assets/our_story.png";


function App() {
  return (
      <>
        <h1>Handbags & Purses</h1>
        <nav>
          <Button
              text="to the collection"
              disabled="false"
          />
          <Button
              text="shop all bags"
              disabled="false"
          />
          <Button
              text="pre-orders"
              disabled="true"
          />
        </nav>
        <main>
            <Product
                label="Best seller"
                image={bag1}
                altImage="the handy bag"
                name="The handy bag"
                price="€400,-"
            />
            <Product
                label="Best seller"
                image={bag2}
                altImage="the stylish bag"
                name="The stylish bag"
                price="€250,-"
            />
            <Product
                label="New collection"
                image={bag3}
                altImage="the simple bag"
                name="The simple bag"
                price="€300,-"
            />
            <Product
                label="New collection"
                image={bag4}
                altImage="the trendy bag"
                name="The trendy bag"
                price="€150,-"
            />
        </main>
        <footer>
            <Tile title="The brand">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci autem consectetur culpa dicta
                    ducimus enim eos, facilis fuga fugiat ipsa laboriosam laborum, nemo nisi obcaecati quas reiciendis
                    repudiandae sapiente voluptate?
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aut beatae corporis
                    cupiditate excepturi harum laborum maiores minima molestias provident quis, quod rem sint soluta
                    sunt tempore? Corporis, saepe!
                </p>
            </Tile>
            <Tile image={brand} altImage="brand image">
            </Tile>
            <Tile image={ourStory} altImage="designers image">
            </Tile>
            <Tile title="Our story">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad aliquam aut cum et ex laboriosam
                    mollitia nulla officiis, placeat possimus praesentium quasi quidem similique temporibus vero
                    voluptatum. Et, veniam.
                </p>
            </Tile>
        </footer>
      </>
  )
}

export default App
