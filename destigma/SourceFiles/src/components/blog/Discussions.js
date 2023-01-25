import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ButtonGroup,
  Button,
  Row,
  Col
} from "shards-react";

const Discussions = ({ title, discussions }) => (
  <Card small className="blog-comments">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>

    <CardBody className="p-0">
      {discussions.map((discussion, idx) => (
        <div key={idx} className="blog-comments__item d-flex p-3">
          {/* Avatar */}
          <div className="blog-comments__avatar mr-3">
            <img src={discussion.author.image} alt={discussion.author.name} />
          </div>

          {/* Content */}
          <div className="blog-comments__content">
            {/* Content :: Title */}
            <div className="blog-comments__meta text-mutes">
              <a className="text-secondary" href={discussion.author.url}>
                {discussion.author.name}
              </a>{" "}
              {/* on{" "}
              <a className="text-secondary" href={discussion.post.url}>
                {discussion.post.title}
              </a> */}
              <span className="text-mutes">- {discussion.date}</span>
            </div>

            {/* Content :: Body */}
            <p className="m-0 my-1 mb-2 text-muted">{discussion.body}</p>

            {/* Content :: Actions */}
            {/* <div className="blog-comments__actions">
              <ButtonGroup size="sm">
                <Button theme="white">
                  <span className="text-success">
                    <i className="material-icons">check</i>
                  </span>{" "}
                  Approve
                </Button>
                <Button theme="white">
                  <span className="text-danger">
                    <i className="material-icons">clear</i>
                  </span>{" "}
                  Reject
                </Button>
                <Button theme="white">
                  <span className="text-light">
                    <i className="material-icons">more_vert</i>
                  </span>{" "}
                  Edit
                </Button>
              </ButtonGroup>
            </div> */}
          </div>
        </div>
      ))}
    </CardBody>

    {/* <CardFooter className="border-top">
      <Row>
        <Col className="text-center view-report">
          <Button theme="white" type="submit">
            View All Comments
          </Button>
        </Col>
      </Row>
    </CardFooter> */}
  </Card>
);

Discussions.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The discussions dataset.
   */
  discussions: PropTypes.array
};

Discussions.defaultProps = {
  title: "Patient's Feedbacks",
  discussions: [
    {
      id: 1,
      date: "15 days ago",
      author: {
        image: require("../../images/avatars/1.jpg"),
        name: "Pranav Balakrishnan",
        url: "#"
      },
      // post: {
      //   title: "Hello World!",
      //   url: "#"
      // },
      body: "Dr. Bailey was terrific. Knowledgeable, sensitive, informative…"
    },
    {
      id: 2,
      date: "30+ days ago",
      author: {
        image: require("../../images/avatars/Fatimah.jpg"),
        name: "Fatimah Abdul Maidin",
        url: "#"
      },
      // post: {
      //   title: "Hello World!",
      //   url: "#"
      // },
      body: "Dr. Bailey did a great job with my first ever psychiatric exam. She explained everything to me in a very clear manner. She was also kind and friendly. All of the staff was great,they were helpful and patient."
    },
    {
      id: 3,
      date: "30+ days ago",
      author: {
        image: require("../../images/avatars/Alice.jpg"),
        name: "Alice Tan Xin Yi",
        url: "#"
      },
      // post: {
      //   title: "Hello World!",
      //   url: "#"
      // },
      body: "Dr. Bailey is incredible. Not only has she taken great care of my mental health, but also she is lovely to speak with at every appointment."
    }
  ]
};

export default Discussions;
