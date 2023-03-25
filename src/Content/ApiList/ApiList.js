import React, { useState, useEffect } from 'react';
import classes from './ApiList.module.css';

function ApiList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=10');
        const data = await response.json();
        setUsers(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={classes.apilist}>
      <div className={classes.container}>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>City</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.login.uuid}>
                <td>
                  <img src={user.picture.thumbnail} alt="User thumbnail" />
                </td>
                <td>
                  {user.name.first} 
                  {' '}
                  {user.name.last}
                </td>
                <td>{user.email}</td>
                <td>{user.dob.age}</td>
                <td>{user.location.city}</td>
                <td>{user.location.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ApiList;
