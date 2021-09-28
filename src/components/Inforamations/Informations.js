
import React from 'react';
import { Card } from 'react-bootstrap';
import'./Information.css';


const Informations = (props) => {
    const{country,cases,todayCases,deaths,todayDeaths,recovered,todayRecovered,active,critical} = props.country;
    const {flag} = props.country.countryInfo;
    return (
<div className = "card-container">
<Card style={{ width: '18rem' }} className="g-4">
  <Card.Img variant="top" src={flag} />
  <Card.Body className="cardboady">
    <Card.Title className="text-bold">Country: {country}</Card.Title>
    <Card.Title className ="text-warning">Total Cases: {cases}</Card.Title>
    <Card.Title className ="text-warning">Today Cases: {todayCases}</Card.Title>
    <Card.Title className ="text-danger">Total Deaths: {deaths}</Card.Title>
    <Card.Title className ="text-danger">Today Deaths: {todayDeaths}</Card.Title>
    <Card.Title className ="text-success">Total Recoverd: {recovered}</Card.Title>
    <Card.Title className ="text-success">Today Recoverd: {todayRecovered}</Card.Title>
    <Card.Title className ="text-primary">Active Cases: {active}</Card.Title>
    <Card.Title className ="text-danger">Critical cases: {critical}</Card.Title>

    
    
  </Card.Body>
</Card>


  
 </div>

    );
};

export default Informations;