import React, { useState, useEffect } from "react";
import  { Link } from 'react-router-dom'

function Characters(){

    const [characters ,setCharacters] = useState([])

    useEffect(() => {
      fetchPeople()
    }, [])

    const fetchPeople = async() => {
      const api = await fetch(`https://swapi.dev/api/people/`)
      const data = await api.json()
      setCharacters(data.results)
    }

    return(
     
            <div>
                {characters.map(char => (
                    <h1 key={char.name}>
                        <Link to={`characters/${char.name}`}>
                            {char.name}
                        </Link>
                    </h1>))}
            </div>
    
       
    )
}

export default Characters
