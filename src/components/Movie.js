import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'

class Movie extends React.Component {
    render (){
        return (
            <div>
                {this.props.movieData.map((value, index) => (
          <ListGroup as="ul" key={index}>
            <ListGroup.Item as="li" >Movie Title: {value.title}</ListGroup.Item>
            <ListGroup.Item as="li">Movie Overview: {value.overview}</ListGroup.Item>
            <ListGroup.Item as="li">Average Votes:{value.average_votes}</ListGroup.Item>
            <ListGroup.Item as="li">Total Votes: {value.total_votes}</ListGroup.Item>
            <ListGroup.Item as="li">Image: <img src={value.image_url} alt=''></img></ListGroup.Item>
            <ListGroup.Item as="li">Popularity: {value.popularity}</ListGroup.Item>
            <ListGroup.Item as="li">Released Date: {value.released_on}</ListGroup.Item>

          </ListGroup>

        ))}

            </div>
        )
    }
}

export default Movie;