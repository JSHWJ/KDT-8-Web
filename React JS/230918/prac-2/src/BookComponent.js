import { Component } from "react";
import PropTypes from "prop-types";
import book from "./book.jpg";

class BookComponent extends Component {
  render() {
    const { title, author, price, type } = this.props;

    const back = {
      backgroundColor: "#FAFABE",
    };
    const top = {
      color: "#FFA500",
      textAlign: "center",
      fontWeight: "800",
      fontSize: "30px",
      padding: "20px",
    };

    const title_style = {
      color: "black",
      textAlign: "center",
      padding: "20px",
      fontSize: "21px",
      fontWeight: "800",
    };

    const back2 = {
      display: "flex",
      justifyContent: "center",
      //   flexDirection: "column",
    };

    const img_style = {
      textAlign: "center",
      width: "100px",
    };

    const other = {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      textAlign: "left",
      color: "black",
      fontWeight: "800",
    };

    return (
      <>
        <div style={back}>
          <div style={top}>이번주 베스트셀러</div>
          <div style={back2}>
            <img style={img_style} src={book} alt="" />
          </div>
          <div style={title_style}> {title}</div>

          <div style={other}>저자: {author}</div>
          <div style={other}>판매가: {price}</div>
          <div style={other}>구분: {type}</div>
        </div>
      </>
    );
  }
}

BookComponent.defaultProps = {
  title: "만두",
  author: "만두",
  price: "만두",
  type: "만두",
};

export default BookComponent;
