import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';




class Weather extends React.Component {
    render() {
        return (
            <div>
                <div>

                    {this.props.forcast.map(day => {
                        return( <div> <Card style={{ width: '18rem' }}>
                            <ListGroup variant="flush">
                                <ListGroup.Item>{day.date} {day.description}</ListGroup.Item>

                            </ListGroup>
                        </Card> </div>)
                    })}
                </div>

            </div>
        )
    }

}
export default Weather;