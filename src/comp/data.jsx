import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userThunk, userSelector } from '../redux/reduce'; 

const Data = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userThunk());
  }, [dispatch]);

  const userData = useSelector(userSelector);

  return (
<>    {userData.map((item, index) => (
        <div key={index}>
          <div>{item.name}</div>
          <div>{item.email}</div>
          <hr />
        </div>
      ))}
      </>  
  );
};

export default Data;
