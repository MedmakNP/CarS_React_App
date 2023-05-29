import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './ApiList.module.css';

function ApiList() {
  const [users, setUsers] = useState([]);
  const { t } = useTranslation();

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
              <th>{t('tableApi.img')}</th>
              <th>{t('tableApi.name')}</th>
              <th>{t('tableApi.email')}</th>
              <th>{t('tableApi.age')}</th>
              <th>{t('tableApi.city')}</th>
              <th>{t('tableApi.country')}</th>
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
