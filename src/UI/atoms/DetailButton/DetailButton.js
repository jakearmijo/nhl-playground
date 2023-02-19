import React from "react";
import { Row, Col } from "@zendeskgarden/react-grid";
import { Button } from "@zendeskgarden/react-buttons";

const DetailButton = (props) => (
  <>
    <Row>
      <Col textAlign="center">
        <Button onClick={props.handleClick} isStretched>
          Update - Play by Play
        </Button>
      </Col>
    </Row>
  </>
);

export default DetailButton;
