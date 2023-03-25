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
  const [nameInput, setNameInput] = useState(TableData);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [currentRow, setCurrentRow] = useState(null);
  const [flagSorting, setFlagSorting] = useState(true);
 
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

  const dragStartHandle = (e, val) => {
    setCurrentRow(val);
  };

  const dragLeaveHandle = () => {
    setFlagSorting(false);
  };

  const dragOverHandle = (e) => {
    e.preventDefault();
  };

  const changeOrder = (item, val) => {
    if (item.order === val.order) {
      return { ...item, order: currentRow.order };
    } if (item.order === currentRow.order) {
      return { ...item, order: val.order };
    }
    return item;
  };

  const dragDropHandle = (e, val) => {
    e.preventDefault();
    setArr((prev) => [...prev.map((item) => changeOrder(item, val))]);
    setFlagSorting(false);
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
  const handleFlagSorting = () => {
    setFlagSorting(true);
  };
  const handleSort = () => { 
    const newArr = [...arr].sort((a, b) => (isAscending ? a.price - b.price : b.price - a.price));
    setArr(newArr);
    setIsAscending((prev) => !prev);
  };
  
  const sortWTsort = () => {
    const newArr = [...arr];
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
      flagSorting={flagSorting}
      setSorting={handleFlagSorting}
    />
  );
}
export default Table;
