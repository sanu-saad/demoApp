//* static getDerivedStateFromError() : This method is used to render a
//*fallback UI, after  an error has been thrown.
//!componentDidCatch(): This method is used to log err information.

import { Component } from "react";

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.log("Error......", error);
    console.log("Info......", info);
  }
  render() {
    if (this.state.hasError) {
      return <>Something went wrong</>;
    }
    return this.props.children;
  }
}
export default ErrorBoundry;
