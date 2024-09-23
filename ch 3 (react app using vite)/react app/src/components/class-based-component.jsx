import { Component } from "react";

class ClassBasedComponent extends Component {
  state = {
    showText: false,
    changeColor: false,
  };

  handleClick = () => {
    console.log("button clicked");
    this.setState({ showText: !this.state.showText });
  };
  handleClickColor = () =>{
    console.log("button clicked");
    this.setState({ changeColor: !this.state.changeColor });
  };
  render() {
    console.log(this.state);
const { showText } = this.state;
const { changeColor } = this.state;
    return (
      <div className="">
        <button onClick={this.handleClick}>Click to Toggle</button>
        <button onClick={this.handleClickColor}>Click to Toggle</button>
        {showText ? (
          <h1 style={{color: changeColor ? 'green': 'red'}}>hello guys</h1>
          ) : null}
      </div>
    );
  }
}

export default ClassBasedComponent;
