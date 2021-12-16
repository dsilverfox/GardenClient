import React, {useState, useEffect} from 'react';

const Plant = () => {

    const [plant, setPlant] = useState([]);


    const fetchPlant = () => {
        fetch('https://cors-anywhere.herokuapp.com/tropicalfruitandveg.com/api/tfvjsonapi.php?search=all', {
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
            I am the plant section!
        </div>
    )
}

export default Plant;