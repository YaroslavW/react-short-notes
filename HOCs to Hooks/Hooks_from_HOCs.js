/* eslint no-use-before-define: 0 */  // --> OFF

// withScreenSize => useScreenSize
// withScreenSize is a utility that provides the current screen size to our component. 
// It’s implemented like this:

import React from ‘react’;
import debounce from ‘debounce’;
const withScreenSize = Comp => {
  return class extends React.Component {
    state = { width: null, height: null };
    updateScreenSize = debounce(() => {
      this.setState({ 
        width: window.screen.width, 
        height: window.screen.height 
      }); 
    }, 17);
    componentDidMount() {
      window.addEventListener(‘resize’, this.updateScreenSize);
    }
    componentWillUnmount() {
      window.removeEventListener(‘resize’, this.updateScreenSize);
    }
    render() {
      return <Comp {...this.props} screenSize={this.state} />
    }
  };
}
// We can implement this with Hooks like so:

import React from ‘react’;
import debounce from ‘debounce’;
const useScreenSize = () => {
  const [screenSize, setScreenSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const updateScreenSize = debounce(() => {
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, 17);
  React.useEffect(() => {
    window.addEventListener(‘resize’, updateScreenSize);
    return () => {
      window.removeEventListener(‘resize’, updateScreenSize);
    };
  }, []);
 return screenSize;
};

// Remember — if you want to keep supporting class components, you can write a wrapper HOC:

const withScreenSize = Comp => props => {
 const screenSize = useScreenSize();
 return <Comp {…props} screenSize={screenSize} />;
};
