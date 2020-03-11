import React from "react"
import { Link } from "gatsby"
import './index.css'
import './beerlov.css'
//import './product.css'
//import './title.css'

export default () => (
    <div class="cc">
        <h1>Beer Store</h1>
      <div class="bar">
                  <Link to="/"><img class="logo1" src="https://www.thebeerstore.ca/wp-content/uploads/2019/04/Logo.svg"></img></Link>
                  <a  class="food" href="https://www.thebeerstore.ca/entertaining/"></a>
                  <Link to="/beerlov/" class="food">Beer Lovers</Link>
                  {/* <a class="style" href="https://www.thebeerstore.ca/beers/"></a> */}
                  <Link  to="/product/" class="style">Shop beer</Link>
                  {/* <a class="certi" href="https://www.thebeerstore.ca/about-us/">About Us</a> */}
                  <Link to="/about/" class="certi">About Us</Link>
              </div><br></br>
              <div calss="container">
              <img class="cont" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRaHgQ9mv_C1Cv8Ar3XQ_qOhmCWsfU3u0-KEmqvephChZjqWcIh"></img>
              <div class="content">
                  <h3>Beer Lovers</h3><p>So you want to know more about beer...well, pour yourself a cold one and get<br></br>comfortable because there is a whole lot of great stuff to learn
                  <br></br>about your favourite beverage</p></div>
                    </div>
            <br></br>
            <h1>Beer 101</h1>
              <div class="row">
                <div class="column"  ><img class="beercerti" src="https://beerstore-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/beer-certification.png"></img>
                <h1>Beer Certification</h1>
                <p>P'ured Homme is the only beer certification program that. To learn more...
                    <a href="https://www.thebeerstore.ca/articles/beer-certification/">Click here</a></p>
                </div>
                
                <div class="column" ><img class="typesstyles" src="https://beerstore-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/archive.jpg"></img>
                <h1>Types and Styles</h1>
                <p>They are whole lot of great stuff to learn about types,styles. To lean more... 
                    <a href="https://www.thebeerstore.ca/articles/beer-types-and-styles/">Click here</a></p>
                </div>
                <div class="column"  ><img class="glassware" src="https://beerstore-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/archive-1.jpg"></img>
                <h1>Glass Ware</h1>
                <p>Every beer lover knows the right glass can actually enhances tasting experience. To learn more... 
                    <a href="https://www.thebeerstore.ca/articles/glassware/">Click here</a>
                </p>
                </div>
                </div>
                <br></br>
              <h1>Beer and Recipes</h1>
              <div class="row">
                  <div class="column"><img src="https://beerstore-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/5cheeseDip-archive.jpg"></img>
                      <h1>5-Ingredients Beer and Cheese Dip</h1>
                      <p>Cook time 20mins <br></br>Serves: 12-16 appetizers<br></br>For Recipe..
                      <a href="https://www.thebeerstore.ca/recipes/5-ingredient-beer-and-cheese-dip/"> Click here</a>
                      </p>
                  </div>
                  <div class="column"><img src="https://beerstore-wpengine.netdna-ssl.com/wp-content/uploads/2019/11/TBS_SaltedCaramelSauce-Archive.jpg"></img>
                      <h1>Amber Ale-Caramel salted sauce</h1>
                      <p>Cook time 12mins<br></br>Serves: 1cup(250ml)<br></br>For Recipe..
                      <a href="https://www.thebeerstore.ca/recipes/amber-ale-salted-caramel-sauce/"> Click here</a>
                      </p>
                  </div>
                  <div class="column"><img src="https://beerstore-wpengine.netdna-ssl.com/wp-content/uploads/2019/11/TBS_Salmon-Archive.jpg"></img>
                      <h1>Amber Ale Cirtus and ginger baled salmon</h1>
                      <p>Cook time 8mins<br></br>Serves: 8<br></br>For Recipe.. 
                      <a href="https://www.thebeerstore.ca/recipes/amber-ale-citrus-ginger-baked-salmon/"> Click here</a>
                      </p>
                  </div>
              </div>
              
                               
</div>
)  