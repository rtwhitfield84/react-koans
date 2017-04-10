import React from 'react';

// Every React component exposes special methods that allow you to plug in logic
// when certain events occur during the component's life. They are called
// 'lifecycle methods', and they can be used in variety of ways.
// They are used mostly to integrate non-React code manipulating the DOM with
// your components - like autocomplete, jQuery plugins etc.
//
// There are three methods that are widely used:
// * componentDidMount - this method fires when React component is rendered for
//                       the first time in the web browser. It does not run when
//                       you render component using server-side rendering.
//                       A render can be caused by an explicit React.render
//                       call or when a child component is rendered within a render
//                       method of its parent component.
//
// * componentDidUpdate - this method fires when a component is updated -
//                        when state changes or the forceUpdate method
//                        is called explicitly.
//
// * componentWillUnmount - this method fires before the component 'dies'. You
//                          can unmount the component directly using the
//                          React.unmountComponentAtNode method. A component can
//                          be also unmounted during re-rendering of the parent component.
//
// Tasks for this exercise are in comments inside the component class code.
//
// In this exercise lifecycle methods will be used to provide convenient debug
// messages in developer's console.
// There are more lifecycle methods available.
// Those three presented are commonly used.
//
// Extra task: Learn about componentWillUpdate. What's the difference between
//             this and the componentDidUpdate method? Think about the possible
//             use cases of this lifecycle method.
// Extra task: Learn about componentWillMount. How can it be useful?
//             (Hint: Think about server-side rendering of React components)
// Extra task: Learn about componentWillReceiveProps. How it can be used?
//             Is it fired when you render a component for the first time?
// Extra task: There is a method which directly modifies behavior of React
//             itself - it's called shouldComponentUpdate.
//             How can you use it to optimise rendering cycle of your
//             React components? Learn about PureRenderMixin.
//
// All lifecycle methods are described here:
// http://facebook.github.io/react/docs/component-specs.html
class LifecycleMethodsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Bob" };
  }

  // This code will be called when the component finishes mounting
  // (so it is visible for a user).
  componentDidMount() {
    console.log("I'm mounted!");
  }

  componentDidUpdate(prevProps, prevState) {
      console.log("Updated!");
  }

  componentWillUnmount() {
      console.log("Goodbye, cruel world! :(" );
  }

  render() {
    return (<p>Whatever, {this.state.name}!</p>);
  }
}

export default LifecycleMethodsComponent;
