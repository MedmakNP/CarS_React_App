/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
import { useState, useEffect } from 'react';
import TableDataAdd from '../Constants/TableArrayAdd';
import TableData from '../Constants/TableArray';
import TableView from './TableView';

function Table() {
  const [arr, setArr] = useState(TableData);
  const [arrAdd] = useState(TableDataAdd);
  const [isAscending, setIsAscending] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [fullArr, setFullArr] = useState(TableData);
  const [editing, setEditing] = useState(false);
  const [activeElem, setActiveElem] = useState(-1);
  const [nameInput, setNameInput] = useState('more text');
  const [editingIndex, setEditingIndex] = useState(-1);
  const [currentRow, setCurrentRow] = useState(null);
 
  // Незнаю чому але useEffect викликається 2 раза

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 38) {
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
      } else if (e.keyCode === 40) {
        setActiveIndex((prev) => (prev < arr.length - 1 ? prev + 1 : prev));
      } 
    });
  }, []);

  const dragStartHandle = (row) => {
    setCurrentRow(row);
  };
  console.log(row);

  const dragLeaveHandle = () => {

  };

  const dragOverHandle = (e) => {
    e.preventDefault();
  };

  const changeOrder = (item, row) => {
    if (item && item.order === row.order) {
      return { ...item, order: currentRow.order };
    } if (item.order === currentRow.order) {
      return { ...item, order: row.order };
    }

    return item;
  };

  const dragDropHandle = (e, row) => {
    e.preventDefault();
    setArr((prev) => [...prev.map((item) => changeOrder(item, row))].sort((a, b) => ((a.id > b.id) ? 1 : -1)));
    setActiveElem(-1);
  };
  const sortRows = (a, b) => {
    if (a.order > b.order) {
      return 1;
    } else { 
      return -1;    
    }  
  };

  const handleActiveElem = (index) => {
    setActiveElem(index);
  }; 
  const handleSaveClick = (index) => {
    const newArray = [...arr];
    newArray[index].technicalData = nameInput;
    setEditing(false);
  };
  const handleSetEditingIndex = (index) => {
    setEditingIndex(index);
    setEditing(true);
  };

  const handleSort = () => { 
    const newArr = [...fullArr].sort((a, b) => (isAscending ? a.price - b.price : b.price - a.price));
    setArr(newArr);
    setIsAscending((prev) => !prev);
  };
  
  const sortWTsort = () => {
    const newArr = [...fullArr];
    for (let i = 0; i < newArr.length - 1; i++) {
      for (let j = i + 1; j < newArr.length; j++) {
        if (isAscending ? newArr[i].maxspeed > newArr[j].maxspeed : newArr[i].maxspeed < newArr[j].maxspeed) {
          const a = newArr[i];
          newArr[i] = newArr[j];
          newArr[j] = a;
        }
      }
    }
    setArr(newArr);
    setIsAscending((prev) => !prev);
  };

  const handleDelete = (index) => {
    const newDeleteArr = [...fullArr];
    newDeleteArr.splice(index, 1);
    setArr(newDeleteArr);
    setFullArr(newDeleteArr);
  };

  const handleAdd = () => {
    const newAddArr = [...fullArr]; 
    const addArr = [...arrAdd];
    newAddArr.unshift(addArr[0]);
    setArr(newAddArr); 
  };
  
  return (
    <TableView
      tableDataArr={arr}
      activeIndex={activeIndex}
      handleSort={handleSort}
      sortWTsort={sortWTsort} 
      handleDelete={handleDelete}
      handleAdd={handleAdd}
      handleSaveClick={handleSaveClick}
      editing={editing}
      setNameInput={setNameInput}
      setEditing={setEditing}
      handleActiveElem={handleActiveElem}
      editingIndex={editingIndex}
      setEditingIndex={setEditingIndex}
      handleSetEditingIndex={handleSetEditingIndex}
      activeElem={activeElem}
      dragDropHandle={dragDropHandle} 
      dragStartHandle={dragStartHandle}
      dragLeaveHandle={dragLeaveHandle}
      dragOverHandle={dragOverHandle}
      sortRows={sortRows}
    />
  );
}
export default Table;
