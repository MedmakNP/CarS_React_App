import React, { useEffect } from 'react';
import Header from './Header';

function withLogger(WrappedHeader) {
  return function WithLogger() {
    useEffect(() => {
      console.log('Header has downloads');
    }, []);

    return <WrappedHeader />;
  };
}

export default withLogger(Header);
