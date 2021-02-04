import React, {useEffect, useState} from 'react'

function Day18(){

    const [data, setData] = useState([])

    useEffect(() => {
        const fetchAPI = async() => {
            const api = await fetch(`https://api.thecatapi.com/v1/breeds`)
            const data = await api.json()
            
            setData(data) 
            console.log(data)
        }

       fetchAPI()
    }, [])

    //Total Cat
        const totalCat = data.length
    //Age
        const age = data.map(datas => parseInt(datas.life_span))
        const sumAge = (a, b) => a + b
        const totalAge = age.reduce(sumAge, 0)
        const avgAge = (totalAge/totalCat).toPrecision(4)
    //Weight
        const weight = data.map(datas => parseInt(datas.weight.metric))
        const sumWeight = (a, b) => a + b
        const totalWeight = weight.reduce(sumWeight, 0)
        const avgweight = (totalWeight/totalCat).toPrecision(4)
        


    return(
    
        <>
        <h1>Cat Paradise</h1>
        <h2>There are {totalCat} cat breeds</h2>
        <h2>On average, cat can weight about {avgweight} Kg, and live {avgAge} years</h2>
        </>
    )
}

export default Day18
