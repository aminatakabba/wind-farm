import React, { useState, useEffect } from 'react';
import axios from 'axios'; //axios is a library that allows you to fetch an api
import './Data.css'

function Data() {
    const [turbines, setTurbines] = useState([]);

    useEffect(() => {
        axios
            .get(`https://run.mocky.io/v3/6a13fe7e-840c-4d82-b58f-c737139f0e55/`) //promise
            .then(response => {
                setTurbines(response.data);
                return response;
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    
    // const damagedTurbine = () => {
    //     // for (let i = 0; i < turbines.level.length; i++) { 
    //     //     const numberOfDamagedTurbines = 0;
    //     //     if (turbines.level === 2) {
    //     //         numberOfDamagedTurbines++;
    //     //         return numberOfDamagedTurbines;
    //     //     }
    //     var count = 0;
    //     for(var i = 0; i < turbines.level.length; ++i){
    //         if (turbines.level[i] == 2)
    //             count++; 
    //             console.log('het')
    //     } 
    // }
    return (
        <div className="app">
            <div>
            <h1>Turbine health of your wind farm</h1>
                <table>
                    
                    <tbody>
                        <th>Turbines</th>
                        {
                            turbines.map(turbine => 
                                <td key={turbine.turbine} style={turbine.level === 2 ? {backgroundColor: "#DA6463"} : {backgroundColor: "transparent"} }>{turbine.turbine}</td> )
                        }
                    </tbody>
                    <tbody>
                        <th>Level</th>
                        {
                            turbines.map(turbine => 
                                <td key={turbine.turbine} style={turbine.level === 2 ? {backgroundColor: "#DA6463"} : {backgroundColor: "transparent"} }>{turbine.level}</td> )   
                        }
                    </tbody>
                    <tbody>
                        <th>Count</th>
                        {
                            turbines.map(turbine => 
                                <td key={turbine.turbine} style={turbine.level === 2 ? {backgroundColor: "#DA6463"} : {backgroundColor: "transparent"} }>{turbine.count}</td> )
                        }
                    </tbody>
                </table>
            </div>
            {/* <div>
                <h2>The number of affected turbins in your farm are </h2>
            </div> */}
        </div>
    )
}

export default Data
