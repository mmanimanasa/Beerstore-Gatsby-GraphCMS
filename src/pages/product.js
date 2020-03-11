import React from "react"
 import { StaticQuery } from "gatsby"
 import './index.css'
 import './beerlov'
 import './title.css'
 import { Link } from "gatsby"

 
 const IndexPage = () => (
   <StaticQuery
     query={graphql`
       query {
         gcms {
           projects {
             id
             title
             description
             price
             image {
               url
             }
           }
         }
       }
     `}
     render={
      data => (
        <div class="bb" >
                      <h1>Beer Store</h1>
            <div class="bar">
            <Link to="/"><img class="logo1" src="https://www.thebeerstore.ca/wp-content/uploads/2019/04/Logo.svg"></img></Link>
                {/* <a  class="food" href="https://www.thebeerstore.ca/entertaining/"></a> */}
                <Link to="/beerlov/" class="food">Beer Lovers</Link>
                <a class="style" href="https://www.thebeerstore.ca/beers/"></a>
                <Link to="/product/" class="style">Shop Beer</Link>
                {/* <a class="certi" href="https://www.thebeerstore.ca/about-us/">About Us</a> */}
                <Link to="/about/" class="certi">About Us</Link>
            </div>
            <br></br>
            <br></br>
          <img class="hero-image" src="https://cdnimg.webstaurantstore.com/images/articles/27/types-of-beer-header.jpg"></img>
          <br></br><br></br>
          <div class="title"><h2>Shop The Beer </h2>
            </div>
          <div class="mainprdt">
            {data.gcms.projects.map(project => {
              //const { title, description, price} = project
              return (
                <div class="top" key={project.id}>                
                <div class="hero"><img id="d" src = {project.image ? project.image.url : undefined} alt={project.title}></img>
                <br></br>
                </div>
                  
                  <div class="cta">
                  <p class="cta cta1"><strong>TITLE:</strong>{project.title}</p>
                  <p class="cta cta2"><strong>DESCRIPTION:</strong>{project.description}</p>
                  <p class="price"><strong>PRICE: </strong>{project.price}</p>
                  
                  {/* src = {project.Image.url} */}
                  <div class="snipcart1"><button class="snipcart-add-item"
                    data-item-id={project.id}
                    data-item-price={project.price}
                    data-item-url={project.url}
                    data-item-description={project.description}
                    data-item-image={project.image.url}
                    data-item-name={project.title}>
                    Add to cart
                    </button></div></div>

                </div>
              )
            })}
          </div>
        </div>
      )
      
  }
  
   />
   
   
 )
 
 
 export default IndexPage
