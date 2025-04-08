import React from 'react'
import "./ExploreMenu.css"
import {menu_list} from "../../assets/assets"
const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id="explore-menu">
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>
      Embark on a great culinary journey with our thoughtfully curated menu, designed to delight your senses. Indulge in exquisite appetizers, expertly crafted mains, and decadent desserts, all made with the finest ingredients. Savor bold flavors, innovative pairings, and timeless classics, perfectly complemented by refreshing mocktails and signature beverages. A feast awaits—explore now!
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>(
            <div 
            onClick={()=>
                setCategory((prev)=>
                    prev===item.menu_name ? "All" : item.menu_name
            )
        } 
            key={index} 
            className='explore-menu-list-item'>
                <img 
                className={category=== item.menu_name ? "active" : ""} 
                src={item.menu_image} 
                alt="" />
                <p>{item.menu_name}</p>
            </div>
        ))}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
