import React, { Component } from 'react';

/**
 * This is a class component, the reason being we need to have an internal state
 * in order to react to the user interaction. 
 * We have access to the internal state because we extend a React.Component
 */
class CounterComponent extends Component {
  /**
   * Like every class component is good practice to have a constructor, that is OOP.
   */
  constructor(props) {
    super(props);
    /**
     * We can define here in the constructor our initial state.
     * The state is a Javascript Object and can contain whichever property we want.
     * In this case we need only one, of type number, that we set to 0 as initial value.
     */
    this.state = { 
      count: 0 
    };
  }

  /**
   * This is an internal function in our component, we use it to handle the user click.
   * When the user clicks on the div, this function gets executed.
   * The only operation that we perform here is to modify our internal state thanks to the setState method.
   * We have access to the setState method because this component extends a React.Component, just like having
   * access to an internal state.
   * The mutation of our internal state will trigger a re-render of this component. At this stage React will update
   * its internal Virtual DOM and then will update the Browser DOM with only the changes, there is no need to re-render
   * other components, so when the user will click on the div, only this component will be re-rendered: App.js and SayHello.js
   * will stay the same.
   */
  addNumber = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  /**
   * The render method is again something that we have because we extends a React.Component and is part of the lifecycle.
   * The render method returns JSX. 
   * Remember that we can add some normal Javascript in JSX, using {}.
   * In this case we are accessing our internal state property (count) to print its value.
   */
  render() {
    return (
      <div>
        You've clicked <b>{this.state.count}</b> times!
        <span className="btn btn-primary" onClick={this.addNumber}>Click me!</span>
      </div>
    );
  }
}

/**
 * Always remember to export the component, so it will be accessible to other components in our application.
 */
export default CounterComponent;
