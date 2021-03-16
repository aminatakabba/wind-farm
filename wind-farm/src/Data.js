import React, { useState, useEffect } from 'react';
import axios from 'axios'; //axios is a library that allows you to fetch an api
import './Data.css' //css files 

function Data() {
    const [turbines, setTurbines] = useState([]);

    useEffect(() => {
        axios
            .get(`https://run.mocky.io/v3/6a13fe7e-840c-4d82-b58f-c737139f0e55/`) //promise to fetch the api
            .then(response => {
                setTurbines(response.data); //direction to where the data can be found
                console.log(response); //the data in the api will be showing in the console
            })
            .catch(error => {
                console.log(error) //error will be loged into the console
            })
    }, [])
    
    /* UNFINISHED FUNCTION */
    // The aim of this function was to show the number of turbines damaged in the farm and provide help to the client
    const damagedTurbine = () => {
        var count = 0;
        for(var i = 0; i < turbines.level; ++i){
            if (turbines.level[i] == 2){
                count++; 
                console.log('hey')
            }
        } 
    }

    //  This will be rendered to the screen
    return (
        <div className="data">
            <div>
            <h1>Turbine health of your wind farm</h1>
                <table>
                    <tbody>
                        <th>Turbines</th>
                        {/* map through the data and fetch the each type of data to the right place */}
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
                <button onClick={damagedTurbine}>get help</button>
            </div> */}
        </div>
        
    )
}

export default Data
