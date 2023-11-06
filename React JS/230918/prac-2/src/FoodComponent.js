import { Component } from "react";
import PropTypes from "prop-types";

class FoodComponent extends Component {
  render() {
    const { food } = this.props;
    const food_style = {
      color: "red",
    };

    return (
      <>
        제가 좋아하는 음식은
        <span style={food_style}> {this.props.food}</span> 입니다.
      </>
    );
  }
}

FoodComponent.defaultProps = {
  food: "만두",
};

FoodComponent.propTypes = {
  food: PropTypes.string, //.isRequired, 붙이면 필수
};

export default FoodComponent;
