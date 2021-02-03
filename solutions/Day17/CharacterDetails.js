import React, {useEffect, useState } from 'react'


function CharacterDetails(){
    const [people, setPeople] = useState()
    const [character ,setCharacter] = useState([])

    useEffect(() => {
       fetchPeople()
    }, [])

    const fetchPeople = async() => {
        const api = await fetch(`https://swapi.dev/api/people/`)
        const data = await api.json()
        setPeople(data.results)
        console.log(data)
        
      }

    // const fetchCharacter = async() => {
    //     const api = await fetch(`https://swapi.dev/api/people/1`)
    //     const data = await api.json()
    //     console.log(data)
    //     setCharacter(data.results)
    //   }
   

    return(
        <>
            <h1>This is character detail page</h1>
            {/* <h1>{character}</h1> */}

        </>
    )
}

export default CharacterDetails