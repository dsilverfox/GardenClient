import React, {useState, useEffect} from 'react';
import PlantSearch from './Plant Search/PlantSearch'
import PlantDisplay from './Plant Search/PlantDisplay';

const Plant = () => {

    const [plant, setPlant] = useState([]);
    const baseURL = "https://cors-anywhere.herokuapp.com/tropicalfruitandveg.com/api/tfvjsonapi.php?search=";
    const [search, setSearch] = useState('');

    const fetchPlant = () => {

        fetch((`${baseURL}+${search}`), {
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

    useEffect(() => {
        fetchPlant();
    }, [])

    return (
    <div>
             <div>
                <PlantSearch />
                {/* <PlantDisplay /> */}
            </div>
    </div>
        
    )
}

export default Plant;