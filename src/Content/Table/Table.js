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
      update: { id: 0, technicalData: '' }
    };
  }

  handleSort = () => {
    const { isAscending, tableDataArr } = this.state;
    const newTableDataArr = [...tableDataArr].sort((a, b) => (isAscending ? a.price - b.price : b.price - a.price));
    this.setState({ tableDataArr: newTableDataArr, isAscending: !isAscending });
  };

  sortWTsort = () => {
    const { isAscending, tableDataArr } = this.state;
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
    this.setState({ tableDataArr: newArr, isAscending: !isAscending });
  };

  handleDelete = (index) => {
    const { tableDataArr } = this.state;
    const newDeleteArr = [...tableDataArr];
    newDeleteArr.splice(index, 1);
    this.setState({ tableDataArr: newDeleteArr }, this.updateTable);
  };

  handleAdd = () => {
    const { tableDataArr, tableDataArrAdd } = this.state;
    const newAddArr = [...tableDataArr]; 
    const addArr = [...tableDataArrAdd];
    newAddArr.unshift(addArr[0]);
    this.setState({ tableDataArr: newAddArr }, this.updateTable);  
  };

  handleData = (e) => {
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
  };

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
