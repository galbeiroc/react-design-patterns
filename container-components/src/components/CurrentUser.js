import axios from 'axios';
import React, { useState, useEffect } from 'react';

export const CurrentUser = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async() => {
      const response = await axios.get('/current-user');
      setUser(response.data);
    })()
  }, [])
  console.log(user)
  return (
    <>
      {
        React.Children.map(children, child => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { user });
          }
          return child;
        })
      }
    </>
  )
}
