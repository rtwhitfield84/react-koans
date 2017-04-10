var React = require("react");

// This is really simple React Component.
// It has its own name (HelloWorld) it will be used for things like error display.
//
// Task: Render HTML span with "Hello World" text.

class HelloWorld extends React.Component {
  // All components *must* have a `render` method defined.
  //
  // To define a component's render method, we use syntax called JSX. As you
  // can see it looks similar to HTML. You can use normal JavaScript too, but
  // JSX is much more popular, so we will stick to it. JSX gets converted to
  // JavaScript code. It is here just for readability purposes.
  //
  // Note: You can read about `render` syntax here:
  // https://facebook.github.io/react/docs/displaying-data.html
  //
  // Warning! JSX is not HTML - in the following lessons you will notice the differences.
  //
  // React delivers a big set of standard HTML elements like `div`, `p`,
  // `canvas` etc. Here you can see usage of a `div` element.

  render() {
    return (
        <span>Hello World</span>
    );
  }
}


export default HelloWorld;
