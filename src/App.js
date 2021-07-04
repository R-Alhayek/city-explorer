import React from 'react';
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      placeData: {},
      checkQuery: '',
      showMap: false

    }
  }

  getLocation = async (e) => {
    e.preventDefault();

    await this.setState({
      checkQuery: e.target.city.value
    })

    let url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.checkQuery}&format=json`;

    let getData = await axios.get(url);

    this.setState({
      placeData: getData.data[0],
      showMap: true
    })
  }



  render() {
    return (
      <div >
        <h1 id="title"> City Explorer </h1>
        <div id="div2">
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label id="city">City Name</Form.Label>
            <Form.Control type="text" placeholder="Enter City Name" />
          </Form.Group>
          <Button id="button" onClick={this.getLocation} variant="primary">Explore!</Button>{' '}

          <Card style={{ width: '18rem' }} >
            <Card.Body>

              <Card.Text id="card">
                City Name: {this.state.placeData.display_name}, {this.state.placeData.lat}, {this.state.placeData.lon}
              </Card.Text>

            </Card.Body>
          </Card>
        </div>
        {this.state.showMap &&
          <img alt='' src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=15`} />
        }

      </div >
    )
  }
}

export default App;