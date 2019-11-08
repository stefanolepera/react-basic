import React from 'react';

/**
 * Just like App.js, this component doesn't need to have an internal state nor any lifecycle methods, 
 * therefore there is no point of having it as a class component. It is in fact a functional component.
 * It's just a function that return some JSX.
 * Like any Javascript function, this component can receive parameters (props in this case).
 * Those props were provided by its parent component (App.js).
 * This is a perfect example of abstracting out the same code in one, dynamic, component.
 * This component gets rendered by App.js while we map through the array of names so, by default if you haven't
 * modified the names array in App.js, it will get rendered 3 times (because we have 3 elements in the array).
 */
const SayHello = (props) => {
  /**
   * The props that we pass to this component is a Javascript Object.
   * In App.js we render this component passing the "to" prop (<SayHello to={name} />).
   * We instantiate a variable here to get access to the prop, like we would do with any 
   * Javascript Object: props.to.
   * If we want, we can take advantage of the ES6 destructuring and declare this component as:
   * ({ to }).
   * We are basically immediately accessing the prop passed by the parent.
   * 
   * Try it! change the component declaration with:
   * const SayHello = ({ to }) => {
   * then comment out the personToSayHelloTo variable (it would be redundant in this case) and change
   * the string that we return in the JSX with: Hello, {to}!
   * It will work!
   */
  const personToSayHelloTo = props.to;

  /**
   * Like every other components, we are returning some JSX.
   * We have some basic html tags like <img>, <div>, <h5>, <p>.
   * We still can write some Javascript inside {}, in this case we are
   * accessing the personToSayHelloTo variable (or the to variable if you have tried to use Destructuring)
   */
  return (
    <div className="card">
      <img src="https://picsum.photos/300/200" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          Hello, {personToSayHelloTo}!
        </h5>
        <p className="card-text">Welcome to the course.</p>
      </div>
    </div>
  );
}

/**
 * Always remember to export the component, so it will be accessible to other components in our application.
 */
export default SayHello;
