import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

const Carlist = () =>{
    const [cars, setCars] = useState([]);
    const fetchCars = () => {
        fetch('http://carrestapi.herokuapp.com/cars')
        .then(res => res.json())
        .then(data => setCars(data._embedded.cars))
        .catch(err => console.log(err))
    }

    useEffect(() =>{
        fetchCars();
    }, [])

    const columns = [
        {field: 'brand'},
        {field: 'model'},
        {field: 'color'},
        {field: 'fuel'},
        {field: 'year'},
        {field: 'price'},

    ]

    return (
        <div className="ag-theme-material" style={{ height: 600, width: '90%' }}>
            <AgGridReac
                rowData={cars}
                columnDefs={columns}
            />
        </div>
    )
}

export default Carlist;