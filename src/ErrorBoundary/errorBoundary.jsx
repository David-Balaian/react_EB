import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  static getDerivedStateFromError = (errorInfo) => {
    return ({
      errorInfo: errorInfo
    })
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    // You can also log error messages to an error reporting service here
    console.log({
      error: error,
      errorInfo: errorInfo
    })
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}
