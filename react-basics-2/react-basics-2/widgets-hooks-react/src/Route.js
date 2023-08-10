import { useState, useEffect } from 'react';

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  useEffect(() => {
    const onLocationChangeHandler = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', onLocationChangeHandler);
    return () => {
      window.removeEventListener('popstate', onLocationChangeHandler);
    };
  }, []);



  

  return currentPath === path ? children : null;
};

export default Route;
