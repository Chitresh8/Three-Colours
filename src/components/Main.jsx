import "./Main.css";
import React from "react";

const Row = ({ children }) => <div className="row">{children}</div>;

const Column = ({ children }) => <div className="col">{children}</div>;

const Box = ({ color }) => (
  <div
    className="box"
    style={{ backgroundColor: color }}
  ></div>
);

export default function Main() {
  return (
    <Row>
      <ChildComponent />
      <Column>
        <Box color="#ff3333" />
      </Column>
    </Row>
  );
}

const ChildComponent = () => (
  <React.Fragment>
    <Column>
      <Box color="#007bff" />
    </Column>
    <Column>
      <Box color="#fc3" />
    </Column>
  </React.Fragment>
);
