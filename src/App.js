import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import './App.css';
import Alert from 'react-bootstrap/Alert'


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
    // console.log(process.env.REACT_APP_LOCATIONIQ_KEY);
    // console.log(this.state.checkQuery);
    let url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.checkQuery}&format=json`;
    try {
      let getData = await axios.get(url);
      // console.log('aaaaaaa', getData);

      this.setState({
        placeData: getData.data[0],
        showMap: true
      })
    } catch {
      this.setState({
        errorMsg: true
      })
    }
  }



  render() {
    return (
      <div >
        <h1 id="title"> City Explorer </h1>
        <div id="div2">
          <Form onSubmit={this.getLocation}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label id="city">City Name</Form.Label>
              <Form.Control name="city" type="text" placeholder="Enter City Name" />
            </Form.Group>
            <input id="button" type='submit' value='Explore!' />
          </Form>

          <Card style={{ width: '18rem' }} >
            <Card.Body>

              <Card.Text id="card">
                City Name: {this.state.placeData.display_name}, {this.state.placeData.lat}, {this.state.placeData.lon}
              </Card.Text>

            </Card.Body>
          </Card>
        </div>
        {this.state.showMap &&
          <img alt='' src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.placeData.lat},${this.state.placeData.lon}&zoom=15`} />
        }

        {
          this.state.errorMsg &&
          <Alert>
          <Alert.Heading id="alert">Oh snap! You got an error! 👀</Alert.Heading>
          </Alert>
        }

      </div >
    )
  }
}

export default App;