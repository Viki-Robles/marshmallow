import React, { useEffect, useState } from 'react';
import './DragonsData.css';


export default function DragonsData() {
    const [dragons, setDragons] = useState([]);
    const [load, setLoad] = useState(false);
    const [rockets, setRockets] = useState([]);
    const [buttonOn, setButtonOn] = useState(false);
    const [showList, setShowList] = useState(false);

    useEffect(() => {
        fetch("https://api.spacexdata.com/v3/dragons")
            .then((response) => response.json())
            .then((dragons) => {
                setDragons(dragons);
                setLoad(true);
            });
    }, []);


    const fetchRockets = () => {
        fetch("https://api.spacexdata.com/v3/rockets")
            .then((response) => response.json())
            .then((rockets) => {
                setRockets(rockets);
            }, []);
    };
   
    if (!load) {
        return <div>Loadin Main...</div>;
    } else {
        return (
            <>
        <h3>Please click the button to ckeck the Rockets</h3>
        <div className="rockets-container">
          <button onClick={() => fetchRockets(!buttonOn)}>Rockets</button>
                <div className="rockets-container">
                    {
                        rockets.map(({ name, id, flickr_images, type, description }) => (
                            <div key={id}>
                                <div className="rockets-item">
                                    <div className="rockets-image"><img src={flickr_images[1]} /></div>
                                    <div className="rockets-title">{name}</div>
                                    <div className="rockets-description">{description}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                </div>
                <div className="dragons-container">
                    {
                        dragons.map(({ name, id, flickr_images, type, description }) => (
                            <div key={id}>
                                <div className="dragons-item">
                                    <div className="dragons-image"><img src={flickr_images[1]} /></div>
                                    <div className="dragons-title">{name}</div>
                                    <div className="dragons-description">{description}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                
                </>
        )
    }
}