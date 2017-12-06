import React, { Component } from "react";
import Section from "../Section";
import Container from "../Container";
import Index from "../Index";
import NavAnchor from "../NavAnchor";

class TOC extends Component {
  render() {
    return (
      <Section>
        <NavAnchor anchor={this.props.anchor} />
        <Container>
          <Index links={this.props.links} />
        </Container>
      </Section>
    );
  }
}

export default TOC;
