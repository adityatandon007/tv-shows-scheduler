import React, { Component } from 'react';
import './App.css';
import { Modal, Row, Col, Container, Navbar } from 'react-bootstrap';
import ShowDetails from './components/ShowDetails';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showsAiring: [],
      openDetails: [],
    };

    this.closeDetails = this.closeDetails.bind(this);
  }

  //open a specific modal
  openDetails(id) {
    this.setState({
      openDetails: {
        [id]: true
      }
    });
  }

  //close a modal
  closeDetails() {
    this.setState({ openDetails: false });
  }

  handleShowDetails() {
    this.openDetails();
  }

  componentDidMount() {

    //load shows airing list from TVmaze API
    fetch("http://api.tvmaze.com/schedule")
      .then(res => res.json())
      .then(
        (results) => {
          this.setState({
            showsAiring: results
          });
        })
  }

  render() {
    return (
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
            />
            {'Shows Airing Today in USA'}
          </Navbar.Brand>
        </Navbar>
        <Container>
          <Row>
            {this.state.showsAiring.map((item, i) => {
              return (
                <Col key={i} lg={3} md={4} sm={6} xs={12}>
                  <div
                    style={{ transitionDelay: '0.' + i + 's' }}
                    className="thumb center-block"
                  >
                    <div className="thumbImageContainer">
                      <div
                        className="thumbImage"
                        style={{
                          background: item.show.image ?
                            'url('+ item.show.image.medium +')' : '#333'
                        }}
                      />
                      <div className="thumbImageOverlayContainer"
                        onClick={this.openDetails.bind(this, i)}
                      >
                        <div className="thumbImageOverlay">
                        </div>
                      </div>
                    </div>
                    <div className="thumbTitle">{item.show.name}</div>
                    <div className="thumbAirtime">{item.show.schedule.time}</div>
                  </div>
                  <Modal
                    bssize="large"
                    show={this.state.openDetails[i] || false}
                    onHide={this.closeDetails}
                  >
                    <ShowDetails id={item.show.id} />
                  </Modal>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
