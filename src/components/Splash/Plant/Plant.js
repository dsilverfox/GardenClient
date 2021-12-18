import React, { useState, useEffect } from 'react';
import PlantSearch from './Plant Search/PlantSearch';
import PlantDisplay from './Plant Search/PlantDisplay';

const Plant = () => {
    const [plant, setPlant] = useState([]);
    const baseURL = "https://cors-anywhere.herokuapp.com/tropicalfruitandveg.com/api/tfvjsonapi.php?search=";
    const [search, setSearch] = useState('');

    const fetchPlant = async (e) => {
        e.preventDefault();
        await fetch((`${baseURL}${search}`), {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
        })

            .then((res) => res.json())
            .then((plantData) => {
                setPlant(plantData);
                console.log(plantData)
            });
        console.log("plant value after fetch: ", plant)
    }

    useEffect(() => {
        console.log("updated plant value: ", plant)
    }, [plant])

    return (
        <div>
            <div>
                 <PlantSearch fetchPlant={fetchPlant} search={search} setSearch={setSearch} plant={plant} />

                 {plant ? plant.results.map((oneplant) => {
                     return (<PlantDisplay plant={oneplant} /> )
                 }) : <div></div>
                                }   

            </div>
        </div>

    )
}

export default Plant;