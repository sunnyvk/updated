import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCardTitle,
    CCol,
    CFormInput,
    CRow,
    CForm,
    CFormSelect,
    CCallout,
    CModal,
    CModalHeader,
    CModalTitle,
    CTable,
    CTableHead,
    CTableRow,
    CTableHeaderCell,
    CTableBody,
    CTableDataCell

} from "@coreui/react";

import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import axios from "axios";
import React, { useState , useEffect } from "react";
let user = JSON.parse(localStorage.getItem('user-info'))
console.log(user);
const token = user.token;
const username = user.user.username;




function LeaveSetup(){

    const [showForm,setForm] = useState(true)
    const [visible, setVisible] = useState(false)
    const [NoofLeave, setNoofLeave] = useState("")
    const [NoofSeekLeave, setNoofSeekLeave] = useState("")
    const [NoofCasualLeave, setNoofCasualLeave] = useState("")
    const [NoofPaidLeave, setNoofPaidLeave] = useState("")
    const [tableData, setTableData] = useState([]);


    
    // let user = JSON.parse(localStorage.getItem('user-info'))
    // console.log(user);
    // const token = user.token;
    // const username = user.user.username;
    // const [result1, setResult1] = useState([]);
    // console.log(token);
    // const [result, setResult] = useState([]);
    // const [paging, setPaging] = useState(0);


    // function createOffer() {
    //     if (NoofLeave != '' && NoofSeekLeave != '' && NoofCasualLeave != '' && NoofPaidLeave != '' 
    //     ) {
    //         const data = {
    //             // showform: showForm,
    //             // visible: visible,
    //             noofleave: NoofLeave,
    //               noofseekleave: NoofSeekLeave,
    //               noofcasualleave: NoofCasualLeave,
    //               noofpaidleave: NoofPaidLeave,
                
    //         }
            // axios.post(`http://localhost:8000/leavesetup`, data)
            //     .then((resp) => {
            //         console.log(resp.data)
            //         alert('Successfully Added')
            //         // getOffer()
            //         // setAction(false)

            //     })
            //     .catch((error) => console.log(error))
    //         axios
    //   .post("/addData", data)
    //   .then((response) => console.log(response.data))
    //   .catch((error) => console.error(error));
    //     } else {
    //         alert('enter all details')
    //     }
            // }}

            useEffect(() => {
                axios.get('http://localhost:8000/leavesetup')
                  .then(res => setTableData(res.data))
                  .catch(err => console.log(err));
              }, []);

            const handleSubmit = (e) => {
                e.preventDefault();
            
                const data = {
                    No_Of_Leave:NoofLeave,
                    No_Of_Seek_Leave:NoofSeekLeave,
                    No_Of_Casual_Leave:NoofCasualLeave,
                    No_Of_Paid_Leave:NoofPaidLeave

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

                axios.post('http://localhost:8000/leavesetup', data , { 
                    headers:{
                    Accept:'application/json',
                    'Authorization': `Bearer ${token}`
                },})
      .then(res => setTableData([...tableData, res.data]))
      .catch(err => console.log(err));

                setNoofLeave('');
                setNoofSeekLeave('');
                setNoofCasualLeave('');
                setNoofPaidLeave('');
              };
console.log(tableData);
return <div>
<CModal visible={visible} onClose={() => setVisible(false)}>
   <CModalHeader>
    <CModalTitle>Successfully Save   <CIcon icon={icon.cilCheckAlt} size="xl" color="success"/></CModalTitle>
    </CModalHeader> 
</CModal>

{showForm?<CCallout color="primary" className="bg-body d-flex justify-content-end">
        <CButton onClick={()=>setForm((value)=>!value)}>Add New Payrol Setup</CButton>
</CCallout>:

<CCard className="overflow-hidden"   >
    <CCardHeader className="p-4" style={{ backgroundColor: '#0B5345', color: 'white' }}>
             <CCardTitle> <h4>Leave Policy</h4></CCardTitle>
    </CCardHeader>
<div className="p-4">
     <CForm>
        <CCol className="d-flex justify-content-end">
            <CButton color='danger' onClick={()=>setForm(()=>true)}>Close</CButton>
        </CCol>
         

        <CRow>
          <CCol md={6}>
          <CFormInput
           type='number'
              label='No of Leave'
               value={NoofLeave}
               onChange={(e) => setNoofLeave(e.target.value)}
               placeholder="Enter No of Leave"
          />
            </CCol>   
            <CCol md={6}>
            <CFormInput
            //   label='No of Sl'
               type='number'
               label='No of Seek Leave'
               value={NoofSeekLeave}
               onChange={(e) => setNoofSeekLeave(e.target.value)}
               placeholder="Enter No of Seek Leave"
          />
            </CCol>    
        </CRow>
        <CRow>
          <CCol md={6}>
          <CFormInput
            //   label='No of CL'
               type='number'
               label='No of Casual Leave'
               value={NoofCasualLeave}
               onChange={(e) => setNoofCasualLeave(e.target.value)}
               placeholder="Enter No of Casual Leave"
          />
            </CCol>   
            <CCol md={6}>
            <CFormInput
            //   label='No of PL'
               type='number'
               label='No of Paid Leave'
               value={NoofPaidLeave}
               onChange={(e) => setNoofPaidLeave(e.target.value)}
               placeholder="Enter No of Paid Leave"
          />
            </CCol>    
        </CRow>      
      <CButton color="primary mt-4 px-4" onClick={
        // setVisible(value=>!value) 
        // setForm(value=>!value) 
        handleSubmit
        } >Save</CButton>

     </CForm>
</div>
<CCol style={{ backgroundColor: '#0B5345'}} className='p-1'>

</CCol>
  </CCard>}




  <CCard className="mb-3 border-success mt-4">
                <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }}>
                    <CCardTitle className="mt-2">Leave Setup</CCardTitle>
                </CCardHeader>
                <CCardBody>
                    
                <CTable className='mt-3' align="middle" bordered style={{ borderColor: "#0B5345" }} hover responsive>
                        <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                            <CTableRow >
                                <CTableHeaderCell>Sr.No</CTableHeaderCell>
                                <CTableHeaderCell>No of Leave</CTableHeaderCell>

                                <CTableHeaderCell>No of Seek Leave</CTableHeaderCell>
                                <CTableHeaderCell>No of Casual Leave</CTableHeaderCell>

                                <CTableHeaderCell>No of Paid Leave</CTableHeaderCell>
                             
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
                            </CTableRow>                       */}


                            {tableData.map((item, index) => (
                            <CTableRow key={index}>
                                <CTableDataCell>{index + 1}</CTableDataCell>
                                <CTableDataCell>{item.No_Of_Leave}</CTableDataCell>
                                <CTableDataCell>{item.No_Of_Seek_Leave}</CTableDataCell>
                                <CTableDataCell>{item.No_Of_Casual_Leave}</CTableDataCell>
                                <CTableDataCell>{item.No_Of_Paid_Leave}</CTableDataCell>
                                {/* <CTableDataCell>{moment(item.endDate).format("MM-DD-YYYY")}</CTableDataCell>
                                <CTableDataCell>{item.ServiceVariation}</CTableDataCell>
                                <CTableDataCell>{item.duration}</CTableDataCell>
                                <CTableDataCell>{item.fees}</CTableDataCell>
                                <CTableDataCell>{item.discount}%</CTableDataCell>
                                <CTableDataCell>{item.fees - (item.fees / 100 * item.discount)}</CTableDataCell> */}
                                
                            </CTableRow>
                        ))}










                        </CTableBody>
                    </CTable>
                </CCardBody>
            </CCard>
  </div>
} 

export default LeaveSetup