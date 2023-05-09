import { CCard,CTable,CTableHead,CTableHeaderCell,CTableRow
    ,CTableBody,CTableDataCell,CCol,CRow,CButton,CForm,
    CCardHeader,CCardTitle,CFormInput,CCallout,CModal,
    CModalHeader,CModalTitle
 } from "@coreui/react"
//  import CIcon from '@coreui/icons-react';
 import axios from "axios";
 import React,{useState ,useEffect} from 'react'
 import {MdDelete} from 'react-icons/md'
 import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import { useSelector } from "react-redux";

function ShiftTimingManagment (){

  let user = JSON.parse(localStorage.getItem('user-info'))
  console.log(user);
  const token = user.token;
  const username = user.user.username;
  const centerCode = user.user.centerCode;
  const url1 = useSelector((el) => el.domainOfApi)


    const [showForm,setForm] = useState(true)
    const [visible, setVisible] = useState(false)

    const [shiftTimeing,setShiftTiming] = useState({
     shiftName:'',
     startTime:new Date(),
     endTime:new Date(),
     username:username,
     centercode:centerCode
    })
    const [tableData, setTableData] = useState([]);
   
  
    useEffect(() => {
      axios.get('http://localhost:8000/shifttiming')
        .then(res => setTableData(res.data))
        .catch(err => console.log(err));
    }, []);

  const handleSubmit = (e) => {
      e.preventDefault();
  
      const data = {
          Shift_Name:shiftTimeing.shiftName,
          Start_Time:shiftTimeing.startTime,
          End_Time:shiftTimeing.endTime,
          // :NoofPaidLeave

      };
  
      // setTableData([...tableData, data]);
      // axios.post(`http://localhost:8000/leavesetup`, data)
      // .then((resp) => {
      //     console.log(resp.data)
      //     alert('Successfully Added')
      //     // getOffer()
      //     // setAction(false)

      // })
      // .catch((error) => console.log(error))

      axios.post('http://localhost:8000/shifttiming', data , { 
          headers:{
          Accept:'application/json',
      },})
.then(res => setTableData([...tableData, res.data]))
.catch(err => console.log(err));
      setShiftTiming('')
      // setNoofLeave('');
      // setNoofSeekLeave('');
      // setNoofCasualLeave('');
      // setNoofPaidLeave('');
    };
console.log(tableData);

  // const saveData = ()=>{
  //   console.log(shiftTimeing)


  //   fetch(`${url1}/shit-time-management`, {
  //     method: "POST",
  //     headers: {
  //         "Authorization": `Bearer ${token}`,
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(shiftTimeing)
  // }).then((el)=>{
  //    console.log(el)
  //   // setVisible(value=>!value) 
  //   // setForm(value=>!value) 
  // }).catch((error)=>{
  //    console.log(error)
  // })
  // }



//   const saveData = ()=>{
//     console.log(shiftTimeing)


//     fetch('http://localhost:8000/shifttiming', {
//       method: "POST",
//       headers: {
//           "Authorization": `Bearer ${token}`,
//           'Accept': 'application/json',
//           'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(shiftTimeing)
//   }).then((el)=>{
//      console.log(el)
//     // setVisible(value=>!value) 
//     // setForm(value=>!value) 
//   }).catch((error)=>{
//      console.log(error)
//   })
//   }


//   useEffect(() => {
//     axios.get('http://localhost:8000/leavesetup')
//       .then(res => setTableData(res.data))
//       .catch(err => console.log(err));
//   }, []);

// const handleSubmit = (e) => {
//     e.preventDefault();

//     const data = {
//         Shift_Name:shiftName,
//         Start_Time:startTime,
//         End_Time:endTime,
//         Action:true,
//         Edit_Delete:'',

//     };

//     // setTableData([...tableData, data]);
//     // axios.post(`http://localhost:8000/leavesetup`, data)
//     // .then((resp) => {
//     //     console.log(resp.data)
//     //     alert('Successfully Added')
//     //     // getOffer()
//     //     // setAction(false)

//     // })
//     // .catch((error) => console.log(error))

//     axios.post('http://localhost:8000/leavesetup', data , { 
//         headers:{
//         Accept:'application/json',
//     },})
// .then(res => setTableData([...tableData, res.data]))
// .catch(err => console.log(err));

//     setShiftTiming('');

//     // setNoofLeave('');
//     // setNoofSeekLeave('');
//     // setNoofCasualLeave('');
//     // setNoofPaidLeave('');
//   };








    return  <> 
 <CModal visible={visible} onClose={() => setVisible(false)}>
       <CModalHeader>
        <CModalTitle>Successfully Save   <CIcon icon={icon.cilCheckAlt} size="xl" color="success"/></CModalTitle>
        </CModalHeader> 
</CModal>



{showForm?<CCallout color="primary" className="bg-body d-flex justify-content-end my-4 p-4">
        <CButton onClick={()=>setForm((value)=>!value)}>Add New </CButton>
</CCallout>:

<CCard className="overflow-hidden my-4"   >
        <CCardHeader className="p-4" style={{ backgroundColor: '#0B5345', color: 'white' }}>
                 <CCardTitle> <h4>Shift Timing</h4></CCardTitle>
        </CCardHeader>
    <div className="p-4">
         <CForm>
            <CCol className="d-flex justify-content-end">
                <CButton color='danger' onClick={()=>setForm(()=>true)}>Close</CButton>
            </CCol>
            <CRow>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  placeholder="Enter Shift Name"
                  label='Shift Name'
                  value={shiftTimeing.shiftName}
                  onChange={(e)=>setShiftTiming(prev=>({...prev,shiftName:e.target.value}))}
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="time"
                  label='Start Time'
                  value={shiftTimeing.startTime}
                  onChange={(e)=>setShiftTiming(prev=>({...prev,startTime:e.target.value}))}
                />
              </CCol>
            </CRow> 
            <CRow >
              <CCol md={6}>
              <CFormInput
                  type="time"
                  label='End Time'
                  value={shiftTimeing.endTime}
                  onChange={(e)=>setShiftTiming(prev=>({...prev,endTime:e.target.value}))}
                />
             
              </CCol>
            </CRow>    

          
          <CButton color="primary mt-4 px-4" onClick={handleSubmit} >Save</CButton>

         </CForm>
    </div>
    <CCol style={{ backgroundColor: '#0B5345'}} className='p-1'>

    </CCol>
      </CCard>}
      
<CCard className="p-4">
<CTable className='mt-3' align="middle" bordered style={{ borderColor: "#0B5345" }} hover responsive>
                            <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                                <CTableRow >
                                    <CTableHeaderCell>Sr.No</CTableHeaderCell>
                                    <CTableHeaderCell>Shift Name</CTableHeaderCell>
                                    <CTableHeaderCell>Start Time</CTableHeaderCell>
                                    <CTableHeaderCell>End Time</CTableHeaderCell>
                                    <CTableHeaderCell>Action </CTableHeaderCell>
                                    <CTableHeaderCell>Edit/Delete</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                {/* <CTableRow>
                                    <CTableDataCell>
                                        
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        
                                    </CTableDataCell>
                                    <CTableDataCell>
                                       
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        
                                    </CTableDataCell>
                                    <CTableDataCell>
                                       
                                    </CTableDataCell>
                                    <CTableDataCell>
                                       
                                    </CTableDataCell>
                                                               
                                </CTableRow> */}


                      {tableData.map((item, index) => (
                            <CTableRow key={index}>
                                <CTableDataCell>{index + 1}</CTableDataCell>
                                <CTableDataCell>{item.Shift_Name}</CTableDataCell>
                                <CTableDataCell>{item.Start_Time}</CTableDataCell>
                                <CTableDataCell>{item.End_Time}</CTableDataCell>
                                {/* <CTableDataCell>{item.Action}</CTableDataCell>
                                <CTableDataCell>{item.Edit_Delete}</CTableDataCell> */}
                                {/* <CTableDataCell className='text-center'>
                                        {item.Status?<CButton size='sm' className='bg-success border-success' onClick={()=>updateStatus(item)} >Active</CButton>:
                                        <CButton className='bg-danger' size='sm' onClick={()=>updateStatus(item)} >InActive</CButton>}
                                    </CTableDataCell> */}
                                    {/* <CTableDataCell>{item.Medium}</CTableDataCell> */}
                                    {/* <CTableDataCell className='text-center' style={{cursor:'pointer'}}>{<MdDelete
                                    onClick={()=>deleteFun(item)}
                                    />}</CTableDataCell> */}
                                                                          
                                </CTableRow>
                                // )}
                                // {/* <CTableDataCell>{moment(item.endDate).format("MM-DD-YYYY")}</CTableDataCell>
                                // <CTableDataCell>{item.ServiceVariation}</CTableDataCell>
                                // <CTableDataCell>{item.duration}</CTableDataCell>
                                // <CTableDataCell>{item.fees}</CTableDataCell>
                                // <CTableDataCell>{item.discount}%</CTableDataCell>
                                // <CTableDataCell>{item.fees - (item.fees / 100 * item.discount)}</CTableDataCell> */}
                                
                            // </CTableRow>
                        ))}
                               
                            </CTableBody>
</CTable>
</CCard>
</>

}



export default ShiftTimingManagment