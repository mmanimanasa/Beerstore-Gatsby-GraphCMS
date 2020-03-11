import React from "react"
import { Link } from "gatsby"
import './index.css'
import './about.css'

export default () => (
    <div class="cc">
        <h1>Beer Store</h1>
        <div class="bar">
                  <Link to="/"><img class="logo1" src="https://www.thebeerstore.ca/wp-content/uploads/2019/04/Logo.svg"></img></Link>
                  {/* <a  class="food" href="https://www.thebeerstore.ca/entertaining/"></a> */}
                  <Link to="/beerlov/" class="food">Beer Lovers</Link>
                  {/* <a class="style" href="https://www.thebeerstore.ca/beers/"></a>  */}
                  <Link  to="/product/" class="style">Shop beer</Link>
                <a class="certi" href="https://www.thebeerstore.ca/about-us/"></a> 
                  <Link to="/about/" class="certi">About Us</Link>
              </div><br></br>
              <div class="title"><h2>About Us</h2>
              </div>
              <h1>Did you know?</h1>
              <div class="about">
              <img id="shop1" src="https://beerstore-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/facts.jpg" align="left"></img>
              <h2>Facts and Figures</h2>
              <p>The Beer Store was established in 1927, which means we’ve been around longer than the Internet.
                And television. And a lot of other things (probably even you!). The Beer Store is a pop culture icon! 
                We played a cameo role in the Canadian film, “Strange Brew”, featuring the McKenzie Brothers of SCTV fame. Here’s something for the number crunchers to chew on: We operate over 450 retail stores, serve 20,723 licensed customers, 650 government-owned LCBO retail locations, 141 retail partners, and 71 Northern Agents. As a customer, you can choose from more than 800 beer brands, in over 445 retail stores, from 190 brewers around the world.
              </p>
              <br></br>
              <br></br><br></br>
              <img id="shop1" src="https://beerstore-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/integrity.jpg" align="right"></img>
              <h2>Selling with Integrity</h2>
              <p>We take corporate social responsibility seriously, and make sure that every beer we sell is a responsible sale — whether it’s through our WeID 25 program or refusing to sell to intoxicated customers. In 2015, we refused service to almost 50,000 individuals at our retail locations. We let brewers decide where they want to sell their product! Brewers can be in one store, 50 stores or all 450 locations of the Beer Store — it’s completely up to them.
              </p>
              </div>
    </div>
)