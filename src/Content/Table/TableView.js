/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import PropTypes from 'prop-types';
import classes from './Table.module.css';

function TableView({
  tableDataArr, handleSort, sortWTsort, handleDelete, handleAdd,
  editing, setNameInput, nameInput, handleSaveClick, editingIndex, setEditingIndex, handleSetEditingIndex,
  activeIndex, handleActiveElem, activeElem, dragStartHandle, dragLeaveHandle, dragDropHandle, dragOverHandle,
  flagSorting, setSorting,
}) {
  return (
    <div className={classes.Table}>
      <div className={classes.container}>
        <table>
          <thead>
            <tr>
              <th>Brand</th>
              <th>Model</th>
              <th onClick={() => { sortWTsort(); setSorting(); }}>Max Speed(WTsort)</th>
              <th onClick={() => { handleSort(); setSorting(); }}>Price(sort)</th>
              <th>Technical Data</th>
              <th> 
                <button type="button" className={classes.btnAdd} onClick={handleAdd}> Add </button> 
              </th>
                
            </tr>
          </thead>
          <tbody>
            { flagSorting ? tableDataArr.map((val, index) => (
              <tr 
                key={val.id} 
                className={index === activeIndex ? classes.activeRow : classes.odd}
                draggable
                onDragStart={(e) => dragStartHandle(e, val)}
                onDragLeave={(e) => dragLeaveHandle(e)}
                onDragOver={(e) => dragOverHandle(e, index)}
                onDrop={(e) => dragDropHandle(e, val)}
              >
                <td 
                  onClick={() => handleActiveElem(index)} 
                  className={index === activeElem ? classes.activeElem : ''}
                >
                  {val.fullname.brand}
                </td>
                <td>{val.fullname.model}</td>
                <td>{val.maxspeed}</td>
                <td>{val.price}</td>
                <td>
                  {editing && index === editingIndex ? (
                    <input
                      type="text" 
                      value={nameInput} 
                      onChange={(e) => setNameInput(e.target.value,)}
                    />
                  ) : val.technicalData}

                </td>
                <td>
                  <button type="button" className={classes.btn} onClick={() => handleDelete(index)}>DELETE</button>
                </td> 
                <td>
                  {index === editingIndex ? (
                    <button
                      type="button"
                      className={classes.btn}
                      onClick={() => {
                        handleSaveClick(index);
                        setEditingIndex(-1);
                      }}
                    >
                      Save
                    </button>
                  ) : (
                    <button type="button" onClick={() => handleSetEditingIndex(index)}>Edit</button>
                  )}

                </td>                
              </tr>
            )) : tableDataArr.sort((a, b) => (a.order > b.order ? 1 : -1)).map((val, index) => (
              <tr 
                key={val.id} 
                className={index === activeIndex ? classes.activeRow : classes.odd}
                draggable
                onDragStart={(e) => dragStartHandle(e, val)}
                onDragLeave={(e) => dragLeaveHandle(e)}
                onDragOver={(e) => dragOverHandle(e, index)}
                onDrop={(e) => dragDropHandle(e, val)}
              >
                <td 
                  onClick={() => handleActiveElem(index)} 
                  className={index === activeElem ? classes.activeElem : ''}
                >
                  {val.fullname.brand}
                </td>
                <td>{val.fullname.model}</td>
                <td>{val.maxspeed}</td>
                <td>{val.price}</td>
                <td>
                  {editing && index === editingIndex ? (
                    <input
                      type="text" 
                      value={nameInput} 
                      onChange={(e) => setNameInput(e.target.value,)}
                    />
                  ) : val.technicalData}

                </td>
                <td>
                  <button type="button" className={classes.btn} onClick={() => handleDelete(index)}>DELETE</button>
                </td> 
                <td>
                  {index === editingIndex ? (
                    <button
                      type="button"
                      className={classes.btn}
                      onClick={() => {
                        handleSaveClick(index);
                        setEditingIndex(-1);
                      }}
                    >
                      Save
                    </button>
                  ) : (
                    <button type="button" onClick={() => handleSetEditingIndex(index)}>Edit</button>
                  )}

                </td>                
              </tr>
            ))} 
          </tbody>
        </table>
      </div>
    </div>      
  );
}

TableView.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  tableDataArr: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handleSort: PropTypes.func.isRequired,
  sortWTsort: PropTypes.func.isRequired,
  handleAdd: PropTypes.func.isRequired,
  editing: PropTypes.bool.isRequired,
  nameInput: PropTypes.string.isRequired,
  setNameInput: PropTypes.func.isRequired,
  handleSaveClick: PropTypes.func.isRequired,
  setEditingIndex: PropTypes.func.isRequired,
  editingIndex: PropTypes.number.isRequired,
  handleSetEditingIndex: PropTypes.func.isRequired,
  activeIndex: PropTypes.number.isRequired,
  handleActiveElem: PropTypes.func.isRequired,
  activeElem: PropTypes.number.isRequired,
  dragDropHandle: PropTypes.func.isRequired,
  dragStartHandle: PropTypes.func.isRequired,
  dragLeaveHandle: PropTypes.func.isRequired,
  dragOverHandle: PropTypes.func.isRequired,
  flagSorting: PropTypes.bool.isRequired,
  setSorting: PropTypes.func.isRequired,
};

export default TableView;
