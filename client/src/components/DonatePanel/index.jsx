import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

// import { Container } from './styles';

const DonatePanel = () => (
  <Card>
    <CardBody>
      <CardTitle tag={"h3"}>Donate:</CardTitle>
      <CardText>
        You can do so on{" "}
        <a
          href="https://www.paypal.com/paypalme/hpeinar/"
          target="_blank"
          className="paypal-blue"
        >
          @PayPal
        </a>{" "}
        or{" "}
        <a
          href="https://www.patreon.com/bePatron?c=1239286"
          target="_blank"
          className="patreon-orange"
        >
          @Patreon
        </a>
      </CardText>
    </CardBody>
  </Card>
);

export default DonatePanel;
