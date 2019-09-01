import React, { Component } from 'react';
import { Modal, Row, Col } from 'react-bootstrap';
import '../App.css';
import './ShowDetails.css';

class ShowDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tvDetails: [],
      loading: true
    };
  }

  componentDidMount() {

    //load TV show details from TVmaze API
    let id = this.props.id;
    fetch(`http://api.tvmaze.com/shows/${id}`)
      .then(
        (response) => response.json()
      )
      .then(
        (details) => {
          this.setState({
            tvDetails: details,
            loading: false
          });
        }
      )
  }

  render() {
    var bg = '#333';

    return (
      <div className="showsDetailsContainer">
        <div className="showsDetails" style={{ background: bg }} />
        <div className="showsDetailsOverlay">
          <Modal.Header closeButton={true} />
          <Modal.Body>
            {this.state.loading ? (
              <div>Loading...</div>
            ) : (
              <div>
                <Row>
                  <Col md={12}>
                    <div className="showsTitle">
                      <span className="showsName">
                        {this.state.tvDetails.name}
                      </span>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={8}>
                    <p className="showsOverview">
                      {this.state.tvDetails.summary}
                    </p>
                  </Col>
                  <Col md={4} sm={12} xs={12}>
                    <div className="showsList">
                    </div>
                  </Col>
                </Row>
              </div>
            )}
          </Modal.Body>
        </div>
      </div>
    );
  }
}

export default ShowDetails;