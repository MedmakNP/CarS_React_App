import { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Table.module.css';

class TableView extends Component {
  render() {
    const {
      tableDataArr, handleSort, sortWTsort, handleDelete, handleAdd 
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
                <th> 
                  <button type="button" className={classes.btnAdd} onClick={handleAdd}> Add </button> 
                </th>
                
              </tr>
            </thead>
            <tbody>
              {tableDataArr.map((val, index, tabData) => (
                <tr key={tabData.id} className={index % 2 === 0 ? classes.even : classes.odd}>
                  <td>{val.fullname.brand}</td>
                  <td>{val.fullname.model}</td>
                  <td>{val.maxspeed}</td>
                  <td>{val.price}</td>
                  <td>{val.technicalData}</td>
                  <td>
                    <button type="button" className={classes.btn} onClick={() => handleDelete(index)}>DELETE</button>
                  </td>                  
                </tr>
              ))} 
            </tbody>
          </table>
        </div>
      </div>      
    );
  }
}
TableView.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  tableDataArr: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handleSort: PropTypes.func.isRequired,
  sortWTsort: PropTypes.func.isRequired,
  handleAdd: PropTypes.func.isRequired,
};

export default TableView;
