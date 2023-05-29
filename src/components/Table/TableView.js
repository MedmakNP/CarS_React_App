/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import classes from './Table.module.css';

function TableView({
  handleSort, sortWTsort, handleDelete, handleAdd,
  editing, setNameInput, nameInput, handleSaveClick, editingIndex, setEditingIndex, handleSetEditingIndex,
  activeIndex, handleActiveElem, activeElem, dragStartHandle, dragLeaveHandle, dragDropHandle, dragOverHandle,
  sortedData, setSorting,
}) {
  const { t } = useTranslation();

  return (
    <div className={classes.Table}>
      <div className={classes.container}>
        <table>
          <thead>
            <tr>
              <th>{t('table.brand')}</th>
              <th>{t('table.model')}</th>
              <th onClick={() => { sortWTsort(); setSorting(); }}>{t('table.maxSpeed')}</th>
              <th onClick={() => { handleSort(); setSorting(); }}>{t('table.price')}</th>
              <th>{t('table.technicalData')}</th>
              <th> 
                <button type="button" className={classes.btnAdd} onClick={handleAdd}>{t('table.add')}</button> 
              </th>
              <th>{t('table.edit')}</th>  
            </tr>
          </thead>
          <tbody>
            { sortedData.map((val, index) => (
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
                  onKeyDown={() => {}} 
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
                  <button type="button" className={classes.btn} onClick={() => handleDelete(index)}>
                    {t('table.del')}
                  </button>
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
                      {t('table.save')}
                    </button>
                  ) : (
                    <button type="button" className={classes.btn} onClick={() => handleSetEditingIndex(index)}>
                      {t('table.edit')}
                    </button>
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
  sortedData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
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
  setSorting: PropTypes.func.isRequired,
};

export default TableView;
