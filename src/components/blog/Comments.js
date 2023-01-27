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

const Comments = ({ title, Comments }) => (
  <Card small className="blog-comments">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>

    <CardBody className="p-0">
      {Comments.map((discussion, idx) => (
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
              on{" "}
              <a className="text-secondary" href={discussion.post.url}>
                {discussion.post.title}
              </a>
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

Comments.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The Comments dataset.
   */
  Comments: PropTypes.array
};

Comments.defaultProps = {
  title: "Comments",
  Comments: [
    {
      id: 1,
      date: "3 days ago",
      author: {
        image: require("./../../images/avatars/miranda-bailey.jpg"),
        name: "Miranda Bailey",
        url: "#"
      },
      post: {
        title: "Full Diagnosis",
        url: "#"
      },
      body: "Observed the child's difficulty in initiating and sustaining social interactions, lack of interest in sharing experiences or emotions with others, and difficulty in understanding others' perspectives. Also noted the child's repetitive and restrictive patterns of behavior, interests and activities."
    },
    {
      id: 2,
      date: "4 days ago",
      author: {
        image: require("./../../images/avatars/miranda-bailey.jpg"),
        name: "Miranda Bailey",
        url: "#"
      },
      post: {
        title: "Speech Theraphy",
        url: "#"
      },
      body: "Noticed the child's difficulty in initiating and sustaining social interactions, lack of interest in sharing experiences or emotions with others, and difficulty in understanding others' perspectives."
    },
    {
      id: 3,
      date: "5 days ago",
      author: {
        image: require("./../../images/avatars/miranda-bailey.jpg"),
        name: "Miranda Bailey",
        url: "#"
      },
      post: {
        title: "Full Diagnosis",
        url: "#"
      },
      body: "Observed the child's difficulty in adjusting to changes in routines or environments, difficulty in understanding and following social rules, and difficulty in understanding and expressing emotions."
    }
  ]
};

export default Comments;
