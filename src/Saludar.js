import React from 'react';


class Saludar extends React.Component {
  render() {
    return(
      <h1>{this.props.text}</h1>
    );
  }
}
export default Saludar;
