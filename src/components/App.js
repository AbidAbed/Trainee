import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useNavigator from '../hooks/useNavigator';
import { useEffect } from 'react';
import { changePath } from '../store/StoreInterface';

const App = () => {
  const { path } = useSelector((state) => state.config);
  const dispatch = useDispatch();

  useEffect(() => {
    window.history.pushState({}, '', '/home');

    const handlePopState = () => {
      dispatch(changePath(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  useEffect(() => {
    window.history.pushState({}, '', path);
  }, [path]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {useNavigator()}
    </div>
  );
};

export default App;
