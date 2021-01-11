import React from 'react';

import { getColor } from 'utils/colors';
import { randomNum } from 'utils/demos';

import { Row, Col, Card, CardHeader, CardBody,CardText,CardTitle, } from 'reactstrap';

import { Bar } from 'react-chartjs-2';

import Page from 'components/Page';

import axios from 'axios';


class ChartPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeName: '',
      createdAt: '',
      address: '',
      latitude: '',
      longitude: '',
      countData: '',
    
        }

    axios ({
        url: 'https://ichater.com/backend/api/timeline/locations',
        method: 'GET',
        data: this.state
      }) 
      .then((response) => {
        console.log(response.data);
       this.setState({
            countData: response.data.length
            
       }) 
      });
      axios ({
        url: 'https://ichater.com/backend/api/timeline',
        method: 'GET',
        data: this.state
      }) 
      .then((response) => {
        console.log(response.data);
       this.setState({
        employeeName: response.data.length
       }) 
      });
}


 render() {

  const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const genLineData = (moreData = {}, moreData2 = {}) => {
  return {
    labels: MONTHS,
    datasets: [
      {
        label: 'Dataset 1',
        backgroundColor: getColor('primary'),
        borderColor: getColor('primary'),
        borderWidth: 1,
        data: [
          this.state.countData,
          this.state.countData,
          this.state.countData,
          this.state.countData,
          this.state.countData,
          this.state.countData,
          this.state.countData,
        ],
        ...moreData,
      },
      {
        label: 'Dataset 2',
        backgroundColor: getColor('secondary'),
        borderColor: getColor('secondary'),
        borderWidth: 1,
        data: [
          this.state.countData,
          this.state.countData,
          this.state.countData,
          this.state.countData,
          this.state.countData,
          this.state.countData,
          this.state.countData,
        ],
        ...moreData2,
      },
    ],
  };
};


  return (
    <Page title="Charts" breadcrumbs={[{ name: 'Charts', active: true }]}>
      <Row>
        <Col lg={3} md={6} sm={6} xs={12} className="mb-3">
        <Card
          style={{ height: 200 }}
        >
        <CardBody className="d-flex flex-column flex-wrap justify-content-center align-items-center">
          <CardTitle>Checn in total</CardTitle>
          <CardText>{this.state.countData}</CardText>
        </CardBody> 
        </Card>
        </Col>

        <Col lg={3} md={6} sm={6} xs={12} className="mb-3">
        <Card
          style={{ height: 200 }}
        >
        <CardBody className="d-flex flex-column flex-wrap justify-content-center align-items-center">
          <CardTitle>User Total</CardTitle>
          <CardText>{this.state.employeeName}</CardText>
        </CardBody> 
        </Card>
        </Col>

        <Col lg={3} md={6} sm={6} xs={12} className="mb-3">
        <Card
          style={{ height: 200 }}
        >
        <CardBody className="d-flex flex-column flex-wrap justify-content-center align-items-center">
          <CardTitle>Gradient title</CardTitle>
          <CardText>card text</CardText>
        </CardBody> 
        </Card>
        </Col>

        <Col lg={3} md={6} sm={6} xs={12} className="mb-3">
        <Card
          style={{ height: 200 }}
        >
        <CardBody className="d-flex flex-column flex-wrap justify-content-center align-items-center">
          <CardTitle>Gradient title</CardTitle>
          <CardText>card text</CardText>
        </CardBody> 
        </Card>
        </Col>

      </Row>
      <Row>
        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Bar</CardHeader>
            <CardBody>
              <Bar data={genLineData()} />
            </CardBody>
          </Card>
        </Col>

        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Combo Bar / Line</CardHeader>
            <CardBody>
              <Bar data={genLineData({ type: 'line', fill: false })} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
  );
  }
}
export default ChartPage;
