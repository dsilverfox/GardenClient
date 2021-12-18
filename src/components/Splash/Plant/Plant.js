import React, {useState, useEffect} from 'react';
import PlantSearch from './Plant Search/PlantSearch'
import PlantDisplay from './Plant Search/PlantDisplay'

const Plant = () => {

    const [plant, setPlant] = useState([]);
    const baseURL = "https://cors-anywhere.herokuapp.com/tropicalfruitandveg.com/api/tfvjsonapi.php?search=";
    const [search, setSearch] = useState('');

    //increased functionality
    // const moreURL = "https://cors-anywhere.herokuapp.com/tropicalfruitandveg.com/api/tfvjsonapi.php?tfvitem=";
    // const [clicked, setClicked] = useState('');
    // const [morePlant, setMorePlant] = useState('');

    const fetchPlant = () => {

        // fetch (`${baseURL} + ${search}`)
        fetch((`${baseURL} + ${search}`), {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
            }),
        }) 
        
            .then((res) => res.json())
            .then((plantData) => {
                setPlant(plantData);
                console.log(plantData)
            });
    }

    //Fetch for increased functionality.
    /*need to set this as an onclick function once we set plant.results.tvfname as a link. This will enable customer to click on the name of the item they had actually intended in their search and get more information.*/
    // const fetchMorePlant = () => {
    //     fetch((`${moreURL} + ${clicked}`), {
    //         method: 'GET',
    //         headers: new Headers ({
    //             'Content-Type': 'application/json',
    //         })
    //     })
    //         .then((res) => res.json())
    //         .then((moreData) => {
    //             setMorePlant(moreData);
    //             console.log(moreData)
    //         });
    // };
    useEffect(() => {
        fetchPlant();
        // fetchMorePlant();
    }, [])
    return (
    <div>
        <PlantSearch fetchPlant={fetchPlant} search={search} setSearch={setSearch} plant={plant}        
        // clicked={clicked} 
        // morePlant={morePlant} 
        // setClicked={setClicked} 
        // fetchMorePlant={fetchMorePlant} 
        />

        <PlantDisplay
        plant={plant}
        // clicked={clicked} 
        // morePlant={morePlant} 
        // setClicked={setClicked} 
        // fetchMorePlant={fetchMorePlant}
        />
    </div>
        
    )
}

export default Plant;