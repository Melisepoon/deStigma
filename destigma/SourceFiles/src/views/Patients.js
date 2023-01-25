import React from "react";
import { Container, Row, Col, Button, Card, CardHeader, CardBody } from "shards-react";
import { Link } from 'react-router-dom';
import PageTitle from "../components/common/PageTitle";

const Tables = () => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Patients" subtitle="List" className="text-sm-left" />
    </Row>

    {/* Default Light Table */}
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">Active Patients</h6>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    Patient ID
                  </th>
                  <th scope="col" className="border-0">
                    Latest Visit
                  </th>
                  <th scope="col" className="border-0">
                    Patient Name
                  </th>
                  <th scope="col" className="border-0">
                    Gender
                  </th>
                  <th scope="col" className="border-0">
                    Age
                  </th>
                  <th scope="col" className="border-0">
                    Guardian's Name
                  </th>
                  <th scope="col" className="border-0">
                    Contact
                  </th>
                  <th scope="col" className="border-0">
                    Status
                  </th>
                  <th scope="col" className="border-0">
                    Report
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>73821</td>
                  <td>10/01/2023</td>
                  <td>Pranav Balakrishnan</td>
                  <td>Male</td>
                  <td>15</td>
                  <td>Kanan Balakrishnan</td>
                  <td>+65 82139122</td>
                  <td><Button size="xs" theme="success" className="mb-2 mr-1">
                    Stable
                  </Button></td>
                  <td>
                    <div>
                      <Link to = "/Symptoms">
                      <Button outline size="xs" theme="primary" className="mb-2 mr-1">
                      Details
                    </Button></Link></div>
                  </td>
                </tr>
                <tr>
                  <td>73822</td>
                  <td>12/12/2022</td>
                  <td>Fatimah Abdul Maidin</td>
                  <td>Female</td>
                  <td>8</td>
                  <td>Yusof Abdul Maidin</td>
                  <td>+60 171823728</td>
                  <td><Button size="xs" theme="secondary" className="mb-2 mr-1">
                    To be monitored
                  </Button></td>
                  <td>
                    <Button outline size="xs" theme="primary" className="mb-2 mr-1">
                      Details
                    </Button></td>
                </tr>
                <tr>
                  <td>73823</td>
                  <td>24/11/2022</td>
                  <td>Alice Tan Xin Yi</td>
                  <td>Female</td>
                  <td>12</td>
                  <td>Peter Tan Jun Wen</td>
                  <td>+65 98765432</td>
                  <td><Button size="xs" theme="success" className="mb-2 mr-1">
                    Stable
                  </Button></td>
                  <td>
                    <Button outline size="xs" theme="primary" className="mb-2 mr-1">
                      Details
                    </Button></td>
                </tr>
                <tr>
                  <td>73824</td>
                  <td>24/11/2022</td>
                  <td>Angela Clarke</td>
                  <td>Female</td>
                  <td>15</td>
                  <td>Chris Clarke</td>
                  <td>+1-660-850-1647</td>
                  <td><Button size="xs" theme="danger" className="mb-2 mr-1">
                    Unstable
                  </Button></td>
                  <td>
                    <Button outline size="xs" theme="primary" className="mb-2 mr-1">
                      Details
                    </Button></td>
                </tr>
                <tr>
                  <td>73825</td>
                  <td>19/10/2022</td>
                  <td>Jerry Nathan Low</td>
                  <td>Male</td>
                  <td>9</td>
                  <td>Low Yik Heng</td>
                  <td>+65 7288292</td>
                  <td><Button size="xs" theme="secondary" className="mb-2 mr-1">
                    To be monitored
                  </Button></td>
                  <td>
                    <Button outline size="xs" theme="primary" className="mb-2 mr-1">
                      Details
                    </Button></td>
                </tr>
                <tr>
                  <td>73826</td>
                  <td>02/10/2022</td>
                  <td>Colt Hersfeld</td>
                  <td>Male</td>
                  <td>11</td>
                  <td>Teressa Thompson</td>
                  <td>1-848-473-7416</td>
                  <td><Button size="xs" theme="success" className="mb-2 mr-1">
                    Stable
                  </Button></td>
                  <td>
                    <Button outline size="xs" theme="primary" className="mb-2 mr-1">
                      Details
                    </Button></td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>

    {/* Default Dark Table */}
    {/* <Row>
      <Col>
        <Card small className="mb-4 overflow-hidden">
          <CardHeader className="bg-dark">
            <h6 className="m-0 text-white">Active Users</h6>
          </CardHeader>
          <CardBody className="bg-dark p-0 pb-3">
            <table className="table table-dark mb-0">
              <thead className="thead-dark">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    First Name
                  </th>
                  <th scope="col" className="border-0">
                    Last Name
                  </th>
                  <th scope="col" className="border-0">
                    Country
                  </th>
                  <th scope="col" className="border-0">
                    City
                  </th>
                  <th scope="col" className="border-0">
                    Phone
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Ali</td>
                  <td>Kerry</td>
                  <td>Russian Federation</td>
                  <td>Gdańsk</td>
                  <td>107-0339</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Clark</td>
                  <td>Angela</td>
                  <td>Estonia</td>
                  <td>Borghetto di Vara</td>
                  <td>1-660-850-1647</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Jerry</td>
                  <td>Nathan</td>
                  <td>Cyprus</td>
                  <td>Braunau am Inn</td>
                  <td>214-4225</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Colt</td>
                  <td>Angela</td>
                  <td>Liberia</td>
                  <td>Bad Hersfeld</td>
                  <td>1-848-473-7416</td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row> */}
  </Container>
);

export default Tables;
