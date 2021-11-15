import React, { useRef, useEffect, useState } from 'react'
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
    CButton,
    CSelect
} from '@coreui/react'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { dbManageService } from '../../controllers/_services/dbmanage.service';
import { errorNotification, warningNotification, successNotification } from '../../controllers/_helpers';
import useTable from './../widgets/useTable';
import TableFooter from './../widgets/TableFooter';

const DBManage = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  dispatch({type: 'set', darkMode: false})

  const user = useSelector(state => state.user)

  if (!localStorage.getItem('userId') || !user || user.is_superuser !== 1) {
    dispatch({type: 'set', darkMode: true})
    history.push('/home')
  }

  const [tableList, setTableList] = useState([]);
  const [selectedTable, setSelectedTable] = useState();
  const [columnsInfo, setColumnsInfo] = useState([])
  const [tableData, setTableData] = useState([]);

  const [page, setPage] = useState(1);
  const { slice, range } = useTable(tableData, page, 10);

  useEffect(() => {
    dbManageService.getTableNames()
        .then(
        list => {
            if (list) {
              let tableNames = []
              list.data.forEach(element => {
                tableNames.push(element[0])
              });
              setTableList(tableNames)
              if (tableNames.length > 0)
                setSelectedTable(tableNames[0])
                onSelectTable(tableNames[0])
            }
        },
        error => {
          errorNotification(error.message, 3000)
        }
    )
  }, [user]);

  const onSelectTable = (tablename) => {
    setSelectedTable(tablename)

    dbManageService.getDataInfoByTableName(tablename)
        .then(
        info => {
            if (info.status) {
              setColumnsInfo(info.columns);
              setTableData(info.data);
            } else {
              errorNotification(info.message, 3000)    
            }
        },
        error => {
          errorNotification(error.message, 3000)
        }
    )
  }

  const downloadCSV = () => {

    dbManageService.downloadCSV(selectedTable)
        // .then(
        // info => {
        //   successNotification("Successfully downloaded", 3000)
        // },
        // error => {
        //   errorNotification(error.message, 3000)
        // }
        .then(res=>{
          const url = window.URL.createObjectURL(new Blob([res.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', selectedTable + '.csv');
          document.body.appendChild(link);
          link.click();
        }).then(blob=>{
            console.log(blob)
        }).catch(err=>errorNotification(err.message, 3000));
  }

  const inputFile = useRef() 

  const showOpenFileDialog = () => {
    inputFile.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        dbManageService.fileUpload(file).then(
          result => {
              if (result.status) {
                successNotification(result.message, 3000);
                onSelectTable(result.table)
              } else {
                warningNotification(result.message, 3000);
              }
          },
          err => {
              warningNotification(err, 3000);
          }
        )
    }
  };

  return (
    <>
      <CRow>
        <CCol className="pr-lg-1 pr-md-1 d-box-shadow1 d-border" sm="12" lg="12" md="12">
          <CCard color="transparent" className="transaction-table d-box-shadow1 d-border mt-3">
            <CCardHeader color="transparent d-border pl-0 pr-0" className="header-title">
                <CRow>
                    <CCol sm="12" md="5" lg="5" style={{display: "inline-flex"}}>
                      <CSelect custom size="lg" className="p-1" name="selectLg" id="selectLg" value={selectedTable} onChange={(e) => onSelectTable(e.target.value)}>
                        { tableList && 
                            tableList.map(tableItem => (
                              <option value={tableItem}>{tableItem}</option>
                            ))
                        }
                      </CSelect>
                    </CCol>
                    <CCol sm="0" md="4" lg="4"></CCol>
                    <CCol sm="12" md="3" lg="3" className="text-right">
                        <input type='file' accept=".csv" ref={inputFile} style={{display: 'none'}} onChange={handleFileChange}/>
                        <CButton color="primary" onClick={showOpenFileDialog}>Import CSV</CButton>
                        <CButton color="success" className="ml-1" onClick={downloadCSV}>Export CSV</CButton>
                    </CCol>
                </CRow>
            </CCardHeader>
            <CCardBody className="p-0" color="default" style={{overflowX: "auto"}}>
            { columnsInfo && 
              <table className="table table-hover table-outline mb-0">
                <thead className="thead-light">
                  <tr>
                    { columnsInfo.map(column => (
                        <th className="text-center">{column}</th>
                      ))
                    }
                  </tr>
                </thead>
                <tbody>
                { slice &&
                  slice.map(item => (
                    <tr>
                      { item.map(detail => (
                        <td className="text-center">
                          { detail }
                        </td>
                        ))
                      }
                    </tr>
                  ))
                }
                </tbody>
              </table>
            }
            { Object.assign([], tableData).length === 0 && 
              <h3 className="text-muted m-3 pt-3 text-center">NO DATA</h3>
            }
            </CCardBody>
            { columnsInfo && tableData && 
              <TableFooter range={range} slice={slice} setPage={setPage} page={page} lastPage={parseInt(tableData.length / 10) + 1  } />
            }
          </CCard>
        </CCol>
      </CRow>
      
    </>
  )
}

export default DBManage
