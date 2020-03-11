import React from "react"
import { Link } from "gatsby"
import './index.css'
import './product.css'
import './title.css'
import './beerlov'
export default () => (
  <div class="cc">
      <h1>Beer Store</h1>
    <div class="bar">
                <Link to="/"><img class="logo1" src="https://www.thebeerstore.ca/wp-content/uploads/2019/04/Logo.svg"></img></Link>
                {/* <a  class="food" href="https://www.thebeerstore.ca/entertaining/">For Beer Lovers</a> */}
                <Link to="/beerlov/" class="food">Beer Lovers</Link>
                {/* <a class="style" href="https://www.thebeerstore.ca/beers/">Our Beer</a> */}
                <Link class="style" to="/product/">Shop beer</Link>
                {/* <a class="certi" href="https://www.thebeerstore.ca/about-us/">About Us</a> */}
                <Link to="/about/" class="certi">About Us</Link>
            </div>
            
            <div class="title">
                    <h2>If it is Chill Time <br></br>Then it is Beer Time</h2>
                </div>
                
                <img class="animated-gif" src="https://cdn.dribbble.com/users/2172077/screenshots/7111433/media/3b65241a979a1ee3f4c15296ac30ee1a.gif" align="left"></img>
                <p><h2>About Beer</h2>Beer is one of the oldest and most widely consumed alcoholic drinks in the world. 
                    It is also the third most popular drink overall after water and tea. Beer is brewed from cer
                    al grains—most commonly from malted barley, though wheat, maize (corn), and rice are also used. 
                     the brewing process, fermentation of the starch sugars in the wort produces ethanol and carbonation in the resulting beer. 
                     Most modern beer is brewed with hops, which add bitterness and other flavours and act as a natural preservative and stabilizing agent. Other flavouring agents such as
                      gruit, herbs, or fruits may be included or used instead of hops. In commercial brewing, the natural carbonation effect is often removed during processing and replaced 
                      with forced carbonation.Beer forms part of the culture of many nations and is associated with social traditions such as beer festivals, as well as a rich pub culture involving activities like pub crawling and pub games.
                      Beer is one of the world's oldest prepared drinks. 
                </p>
                <br></br>
                <br></br>
               <img id="shop" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAr0D44yHk-Bl4T35xBS780lqPn_aCoy-i7jy4-JYJD1TSQSGs" align="right"></img> 
               <p><h2>Ingredients</h2>The basic ingredients of beer are water; a starch source, such as malted
                barley, able to be saccharified (converted to sugars) then fermented (converted into ethanol and carbon dioxide); a brewer's yeast to produce the fermentation;
                and a flavouring such as hops.A mixture of starch sources may be used, with a secondary carbohydrate source, such as maize (corn), rice, wheat, or sugar,
                often being termed an adjunct, especially when used alongside malted barley.Less widely used starch sources include millet, sorghum and cassava root in Africa, and potato
                in Brazil, and agave in Mexico, among others.The amount of each starch source in a beer recipe is collectively called the grain bill.
                Water is the main ingredient of beer, accounting for 93% of its weight.Though water itself is, ideally, flavorless, its level of dissolved minerals, specifically, bicarbonate ion, does
                influence beer's finished taste.
                </p> 
                <br></br>
                <br></br>
                <img id="shop" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_N0wrsNk4WJ4ablc-KPPsBD2Gjz4vtBVo7hV5yLPH1D9jcP8q" align="left"></img>
                <p><h2>varieties</h2>While there are many types of beer brewed, the basics of brewing beer are shared across national and cultural boundaries.The traditional European brewing regions Germany,Belgium,England and the Czech Republic have local varieties of beer.
                English writer Michael Jackson, in his 1977 book The World Guide To Beer, categorised beers from around the world in local style groups suggested by local customs and names.Fred Eckhardt furthered Jackson's work in The Essentials of Beer Style in 1989.
                Top-fermented beers are most commonly produced with Saccharomyces cerevisiae, a top-fermenting yeast which clumps and rises to the surface, typically between 15 and 25°C (59 and 77°F).At these temperatures, yeast produces significant amounts of esters 
                ,secondary flavour,aroma products.
                </p>
                <br></br>
            <p><img id="shop" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIu4df_vfIfhhaEygb0uw26c-uaVvXjOOLicxeZiuNT-BWSE2J" align="right"></img>
            </p>
            <Link class="threeD" to="/product/"> Shop the Beer</Link>
            </div>
  
)