import React from 'react';

class CanvasErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.warn("WebGL Context could not be created or 3D scene failed.", error);
  }

  render() {
    if (this.state.hasError) {
      // Return fallback or null so the rest of the page still loads fine without 3D
      return <div className="absolute inset-0 bg-transparent pointer-events-none" />;
    }

    return this.props.children;
  }
}

export default CanvasErrorBoundary;
