/* eslint-disable no-plusplus */
import { Component } from 'react';
import TableDataAdd from '../Constants/TableArrayAdd';
import TableData from '../Constants/TableArray';
import TableView from './TableView';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableDataArr: TableData,
      tableDataArrAdd: TableDataAdd,
      isAscending: true,
    };
  }

  handleSort = () => {
    this.setState(({ isAscending, tableDataArr }) => {
      const newTableDataArr = [...tableDataArr].sort((a, b) => (isAscending ? a.price - b.price : b.price - a.price));
      return { tableDataArr: newTableDataArr, isAscending: !isAscending };
    });
  };

  sortWTsort = () => {
    this.setState(({ isAscending, tableDataArr }) => {
      const newArr = [...tableDataArr];
      for (let i = 0; i < newArr.length - 1; i++) {
        for (let j = i + 1; j < newArr.length; j++) {
          if (isAscending ? newArr[i].maxspeed > newArr[j].maxspeed : newArr[i].maxspeed < newArr[j].maxspeed) {
            const a = newArr[i];
            newArr[i] = newArr[j];
            newArr[j] = a;
          }
        }
      }
      return { tableDataArr: newArr, isAscending: !isAscending };
    });
  };

  handleDelete = (index) => {
    this.setState(({ tableDataArr }) => {
      const newDeleteArr = [...tableDataArr];
      newDeleteArr.splice(index, 1);
      return { tableDataArr: newDeleteArr };
    });
  };

  handleAdd = () => {
    this.setState(({ tableDataArr, tableDataArrAdd }) => {
      const newAddArr = [...tableDataArr]; 
      const addArr = [...tableDataArrAdd];
      newAddArr.unshift(addArr[0]);
      return { tableDataArr: newAddArr };    
    });
  };
  /* handleData = (e) => {
    const { value, name } = e.target;
    const { update } = this.state;
    this.setState({
      update: {
        ...update,
        [name]: value,
      },
    });
  };

  updateObj = (index) => {
    const { tableDataArr } = this.state;
    const { update } = this.state;
    let updateArr = [...tableDataArr]; 
    updateArr = updateArr.map((item, i) => (i === index ? { ...item, technicalData: update.technicalData } : item)); 
    this.setState({ tableDataArr: updateArr });
  }; */

  render() {
    const { tableDataArr } = this.state;
    return (
      <TableView
        tableDataArr={tableDataArr}
        handleSort={this.handleSort}
        sortWTsort={this.sortWTsort} 
        handleDelete={this.handleDelete}
        handleAdd={this.handleAdd}
      />
    );
  }
}
export default Table;
