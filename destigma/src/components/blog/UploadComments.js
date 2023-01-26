import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  FormInput,
  FormTextarea,
  Button
} from "shards-react";

const UploadComments = ({ title }) => (
  <Card small className="h-100">
    {/* Card Header */}
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>

    <CardBody className="d-flex flex-column">
      <Form className="quick-post-form">
        {/* Title */}
        <FormGroup>
          <FormInput placeholder="Monthly Diagnosis" />
        </FormGroup>

        {/* Body */}
        <FormGroup>
          <FormTextarea placeholder="Less hyperactivity and impulsive behaviors..." />
        </FormGroup>

        {/* Create Draft */}
        <FormGroup className="mb-0">
          <Button theme="accent" type="submit">
            Upload
          </Button>
        </FormGroup>
      </Form>
    </CardBody>
  </Card>
);

UploadComments.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

UploadComments.defaultProps = {
  title: "Upload"
};

export default UploadComments;
