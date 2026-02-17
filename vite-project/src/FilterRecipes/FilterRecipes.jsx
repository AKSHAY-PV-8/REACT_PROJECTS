import { recipesData } from "./Recipes"
import "./FilterRecipes.css"
import { useState } from "react"


const FilterRecipes = () => {

    const [fullData] = useState(recipesData)
    const [items, setItems] = useState(recipesData)
    const [cart, setCart] = useState(0)

    let averageRating = ((items.reduce((acc, item) => { return acc + item.rating }, 0)) / items.length)


    function handleSelection(value) {
        setItems(fullData.filter(r => r.rating >= value))
    }

    return (
        <div>
            <h2>Recipe Explorer</h2>
            <div className="nav">
                <div className="">
                    <label htmlFor="">Filter by Rating</label>
                    <select name="" id="" onChange={(e) => handleSelection(Number(e.target.value))}>
                        <option value="4.0">4.0+</option>
                        <option value="4.3">4.3+</option>
                        <option value="4.5">4.5+</option>
                        <option value="4.7">4.7+</option>
                        <option value="4.9">4.9</option>
                    </select>
                </div>

                <div className="cart">
                    Cart  Itmes: {cart}
                </div>
            </div>

            <h2>Average Rating: {averageRating}({items.length} recipes)</h2>

            <div className="card-container">
                {items.map(item => (
                    <Card item={item}
                    onAddCart={() => setCart(prev => prev + 1)}/>
                ))}
            </div>

        </div>
    )
}

export default FilterRecipes


function Card({
    item,
    onAddCart
}) {
    return (
        <div className="card" key={item.id}>
            <div className="img-container">
                <img src={item.image} alt="" />
            </div>
            <h4>{item.name}</h4>
            <p>cuisine: {item.cuisine}</p>
            <p>Rating: {item.rating} ({item.reviewCount} reviews)</p>
            <button onClick={() => onAddCart()}>Add to Cart</button>
        </div>
    )
}
