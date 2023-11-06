import { Component } from "react";
import PropTypes from "prop-types";

class ClassComponent extends Component {
  render() {
    const { name } = this.props;

    return (
      <>
        <h1>hello {this.props.name}</h1>
        <h4>{name}</h4>
      </>
    );
  }
}

ClassComponent.defaultProps = {
  name: "홍길동",
};

ClassComponent.propTypes = {
  name: PropTypes.string, //.isRequired, 붙이면 필수
};

export default ClassComponent;
