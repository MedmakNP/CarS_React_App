import { Component } from 'react';
import classes from './Table.module.css';

class TableView extends Component {
  render() {
    const {
      tableDataArr, handleSort, sortWTsort, handleDelete, handleAdd, 
    } = this.props;
    return (
      <div className={classes.Table}>
        <div className={classes.container}>
          <table>
            <thead>
              <tr>
                <th>Brand</th>
                <th>Model</th>
                <th onClick={sortWTsort}>Max Speed(WTsort)</th>
                <th onClick={handleSort}>Price(sort)</th>
                <th>Technical Data</th>
                <th><button className={classes.btnAdd} onClick={handleAdd}> Add </button></th>
                
              </tr>
            </thead>
            <tbody>
              {tableDataArr.map((val, index) => (
                <tr key={index} index={index}>
                  <td>{val.fullname.brand}</td>
                  <td>{val.fullname.model}</td>
                  <td>{val.maxspeed}</td>
                  <td>{val.price}</td>
                  <td>{val.technicalData}</td>
                  <td><button className={classes.btn} onClick={() => handleDelete(index)}>DELETE</button></td>                  
                </tr>
              ))} 
            </tbody>
          </table>
        </div>
      </div>      
    );
  }
}

export default TableView;
