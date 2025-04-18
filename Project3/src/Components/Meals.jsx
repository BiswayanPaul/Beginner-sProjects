import React from 'react'
import "../style.css"
import axios from 'axios'
import { useState, useEffect } from 'react'



const Meals = () => {
    const [meals, setMeals] = useState([])

    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken")
            .then(res => {
                console.log(res.data.meals)
                setMeals(res.data.meals);
            }).catch(error => console.log(error))
    }, [])

    const itemsList = meals.map(({ strMeal, idMeal, strMealThumb }) => {
        return (
            <section key={idMeal} className="card">
                <img src={strMealThumb} alt={strMeal} />
                <section className="content">
                    <p>{strMeal}</p>
                    <p>#{idMeal}</p>
                </section>
            </section>
        )
    })

    return (
        <div className='items-container'>
            {itemsList}
        </div>
    )
}

export default Meals