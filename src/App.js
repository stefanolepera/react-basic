import React from 'react';

import CounterComponent from './components/CounterComponent';
import SayHello from './components/SayHello';

/**
 * This is our main component.
 * This component is the one that gets rendered in our html <div>.
 * Remember that we are building a SPA (Single Page Application), so we might have
 * even a really complex web application but nonetheless we still have a single html file
 * and a single main component (App.js in this case) that render other components, using 
 * the composition pattern.
 * Think about App.js as the 4 walls that delimits our house: we can have a small house with
 * just 1 room or a massive one with 10+ rooms ... we still have 4 walls to contain everything.
 * 
 * We don't need to have an internal state nor any lifecycle methods in App.js, therefore there is no point
 * of having it as a class component. It is in fact a functional component.
 * It's just a function that return some JSX.
 */
const App = () => {
  /**
   * A simple internal variable, of type array, that we use to store the names of the people we want to say hello to.
   * If you would add another name to the array (maybe your own!) you would see a total of 4 <SayHello> render instead of 3.
   */
  const names = [
    'Amanda',
    'Stefano',
    'Duncan'
  ];

  /**
   * Here we are returning some JSX to describe how our component should look like.
   * We use normal html tags like <divs> and Bootstrap classes for CSS.
   * Remember that we can add some normal Javascript in JSX, using {}.
   * In this case we are mapping through our names array and returning some more JSX!
   * This is awesome because we can make our component dynamic and data driven.
   * Add, remove or modify names from the array and the component will automatically react to that,
   * rendering more or less (or just different content) <SayHello> components.
   * Lastly, we want to render the <CounterComponent> as well.
   * At this stage App.js does not know (and does not even care) what <CounterComponent> does or looks like.
   * <CounterComponent> is a separate component that can handle its own look and functionality.
   */
  return (
    <div className="container">
      <div className="row">
        {names.map(name => {
          return <SayHello to={name} />;
        })}
        <CounterComponent />
      </div>
    </div>
  );
};

/**
 * Always remember to export the component, so it will be accessible to other components in our application.
 */
export default App;
