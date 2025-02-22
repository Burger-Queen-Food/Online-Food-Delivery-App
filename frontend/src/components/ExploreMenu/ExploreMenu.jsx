import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({ category, setCategory }) => {

    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore our menu</h1>
            <p className='explore-menu-text'>Experience the joy of effortless dining with our food delivery app.
                Choose from a variety of delicious meals, order in seconds, and enjoy quick,
                reliable delivery to your doorstep. Satisfy your cravings anytime, anywhere.
                Order your favorite dish today!</p>

            <div className="explore-menu-list">
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className="explore-menu-list-item">
                            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>

                        </div>
                    )
                })}
            </div>

            <hr />

        </div>
    )
}

export default ExploreMenu