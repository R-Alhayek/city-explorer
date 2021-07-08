import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'

class Weather extends React.Component {
    render (){
        return (
            <div>
                {this.props.weatherData.map((value, index) => (
          <ListGroup as="ul" key={index}>
            <ListGroup.Item as="li" >{value.date}</ListGroup.Item>
            <ListGroup.Item as="li">{value.description}</ListGroup.Item>
          </ListGroup>))}

            </div>
        )
    }
}

export default Weather;