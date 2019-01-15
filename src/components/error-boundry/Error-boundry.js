import React, {Component} from "react";
import ErrorIndicator from "../error-indicator";

export default class ErrorBoundry extends Component{
  componentDidCatch() {
    this.setState({ hasError: true})
  }

  state = {
    hasError: false
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator/>;
    }
    return this.props.children;
  }
}