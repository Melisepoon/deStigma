import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  // CardFooter,
  // Row,
  // Col,
  // FormSelect
} from "shards-react";

const TopReferrals = ({ title, referralData }) => (
  <Card small>
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
      <div className="block-handle" />
    </CardHeader>

    <CardBody className="p-0">
      <ListGroup small flush className="list-group-small">
        {referralData.map((item, idx) => (
          <ListGroupItem key={idx} className="d-flex px-3">
            <span className="text-semibold text-fiord-blue">{item.title}</span>
            <span className="ml-auto text-right text-semibold text-reagent-gray">
              {item.value}
            </span>
          </ListGroupItem>
        ))}
      </ListGroup>
    </CardBody>

    {/* <CardFooter className="border-top">
      <Row> */}
        {/* Time Span */}
        {/* <Col>
          <FormSelect
            size="sm"
            value="last-week"
            style={{ maxWidth: "130px" }}
            onChange={() => {}}
          >
            <option value="last-week">Last Week</option>
            <option value="today">Today</option>
            <option value="last-month">Last Month</option>
            <option value="last-year">Last Year</option>
          </FormSelect>
        </Col> */}

        {/* View Full Report */}
        {/* <Col className="text-right view-report"> */}
          {/* eslint-disable-next-line */}
          {/* <a href="#">Full report &rarr;</a>
        </Col> */}
      {/* </Row>
    </CardFooter> */}
  </Card>
);

TopReferrals.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The referral data.
   */
  referralData: PropTypes.array
};

TopReferrals.defaultProps = {
  title: "Top Symptoms Observed",
  referralData: [
    {
      title: "Repetition of Words",
      value: "35%"
    },
    {
      title: "Intense Fear",
      value: "22%"
    },
    {
      title: "Excessive Anxiety",
      value: "18%"
    },
    {
      title: "Stress",
      value: "12%"
    },
    {
      title: "Strong Language Used",
      value: "8%"
    },
    {
      title: "Others",
      value: "5%"
    },
    {
      title: " ",
      value: " "
    },
    {
      title: " ",
      value: " "
    },
  ]
};

export default TopReferrals;
