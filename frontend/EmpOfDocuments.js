// import React from 'react'
import {
    CButton,
    CButtonGroup,
    CCard,
    CCardBody,
    CCardHeader,
    CCardTitle,
    CCol,
    CForm,
    CFormInput,
    CFormSelect,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
    CToast,
    CToastBody,
    CToastClose,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import axios from "axios";
import React, { useState , useEffect } from "react";
import { cilArrowCircleTop, cilFile } from '@coreui/icons'
import { FaBeer } from 'react-icons/fa';
import DataTable from 'src/components/DataTable'
import { MdCall, MdDelete, MdEdit, MdMail } from 'react-icons/md';
import { useSelector } from 'react-redux'



const EmpOfDocuments = () => {


    // const header = [


    //     { heading: 'Sr.No', value: 'id' },
    //     // { heading: 'Date', value: 'id' },
    //     { heading: 'Name', value: 'Jonas' },
    //     { heading:'Mobile',vlaue:'9377646374'},
    //     // { heading: 'Email Id', value: 'member_name' },
    //     { heading: 'Gender', value: 'male' },
    //     // { heading: 'Address', value: 'service_name' },
    //     // { heading: 'Sources', value: 'variation_name' },
    //     { heading: 'Department', value: 'expiry_date' },
    //     { heading: 'Desgantion', btn: 'renew' },
    //     { heading: 'Doc Type', value: cilFile },
    //     { heading: 'Doc Name', btn: 'renew' },
    //     // { heading: 'Document', iconBtn: cilFile },
    //     // { heading: 'Action', com: (<> <FaBeer size='20px' /></>) },
    //     { heading:'Edit/Delete',value:''}
    
    // ]

    // const Users = [
    //     {
    //         id: 1,
    //         date_time: "25-08-2022 03:00 PM",
    //         member_name: "Nayana Nagrecha",
    //         mobile: "9136123476",
    //         service_name: "Yoga",
    //         variation_name: "3 Months",
    //         expiry_date: "31-08-2022",
    //         sales_rep: "Sejal Ganatra",
    //         pt_trainer: "-",
    //         trainer: "Prabha Yadav",
    //         staff_name: "Sejal Ganatra",
    //     },
    //     {
    //         id: 2,
    //         date_time: "25-08-2022 03:00 PM",
    //         member_name: "Nayana Nagrecha",
    //         mobile: "9136123476",
    //         service_name: "Yoga",
    //         variation_name: "3 Months",
    //         expiry_date: "31-08-2022",
    //         sales_rep: "Sejal Ganatra",
    //         pt_trainer: "-",
    //         trainer: "Prabha Yadav",
    //         staff_name: "Sejal Ganatra",
    //     },
    // ];


    // return (
    //     <CRow>
    //         <CCol lg={12} sm={12}>
    //             <CCard className="mb-3 border-success">
    //                 <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }}>
    //                     <CCardTitle className="mt-2">Employee  Document </CCardTitle>
    //                 </CCardHeader>
    //                 <CCardBody>
    //                     <CRow className='d-flex mb-2'>
    //                         <CCol lg={3} sm={6} className='mb-2'>
    //                             <CFormSelect
    //                                 id="inputGroupSelect04"
    //                                 aria-label="Example select with button addon"
    //                             >
    //                                 <option>Name</option>
    //                                 <option value="1">Location</option>
    //                                 <option value="3">Mobile</option>
    //                                 <option value="3">Email</option>
    //                                 <option value="2">Department</option>
    //                                 <option value="2">Desgantion</option>
    //                             </CFormSelect>
    //                         </CCol>

    //                         <CCol lg={3} sm={6} className='mb-2'>
    //                             <CFormInput
    //                                 type='date'
    //                                 placeholder="Search"
    //                                 aria-label="Recipient's username"
    //                                 aria-describedby="button-addon2"
    //                             />
    //                             {/* <CButton type="button" color="primary">
    //                                 Search
    //                             </CButton> */}
    //                         </CCol>
    //                         <CCol lg={4} sm={6} className='mb-2' >
    //                             <CButtonGroup className='float-end'>
                                    
    //                                 <CButton color="primary">
    //                                     <CIcon icon={cilArrowCircleTop} />
    //                                     {' '}Export
    //                                 </CButton>
    //                                 <CButton color="primary">
    //                                     <CIcon icon={cilArrowCircleTop} />
    //                                     {' '}Import
    //                                 </CButton>
    //                             </CButtonGroup>
    //                         </CCol>
    //                     </CRow>
    //                     <DataTable heading={header} data={Users} />
    //                 </CCardBody>
    //             </CCard>
    //         </CCol>
    //     </CRow>
    // )

    
    const url = useSelector((el)=>el.domainOfApi)  
    
    const [action, setAction] = useState(false)
    const [toast, setToast] = useState(false)
    const [id, setId] = useState()

    const [name, setName] = useState('');
    const [mobile , setMobile]=useState('');
    const [gender, setGender] = useState('');
    const [department, setDepartment] = useState('');
    const [designation, setDesignation] = useState('');
    const [doctype, setDoctype] = useState('');
    const [docname, setDocname] = useState('');
    // const [category, setCategory] = useState('');
    // const [address, setAddress] = useState('');
    // const [company, setCompany] = useState('');
    const [result1, setResult1] = useState([])

    // const [search1, setSearch1] = useState('')
    // const [search2, setSearch2] = useState('')
    // const [search3, setSearch3] = useState('')
    // const [search4, setSearch4] = useState('')
    // const [search5, setSearch5] = useState('')
    // const [search6, setSearch6] = useState('')
    // const [search7, setSearch7] = useState('')
    // const [search8, setSearch8] = useState('')
    // const [search9, setSearch9] = useState('')
    // const [search10, setSearch10] = useState('')

    let user = JSON.parse(localStorage.getItem('user-info'))
    console.log(user);
    // let user = JSON.parse(localStorage.getItem('user-info'))
    // console.log(user);
    const token = user.token;
    const username = user.user.username;
    const [paging, setPaging] = useState(0);
    useEffect(() => {
        getImpCall()
    }, [])





    function getImpCall() {
        axios.get('http://localhost:8000/employeedocument', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                setResult1(res.data.reverse())
                console.log(res.data);
            })
            .catch((error) => {
                console.error(error)
            })
    }


    // function ProductCodeGenrator(num){
    //     const randomNo = Math.round(Math.random()*(100  +num))
    //     return  `CL${randomNo}R${randomNo+num}${num}`
    //    }


    const saveImpCall = () => {
        let data = {
            
            Name: name, Mobile:mobile, Gender:gender, Department:department ,  Designation:designation , Doctype:doctype, Docname:docname , 
        }

        
        fetch('http://localhost:8000/employeedocument', {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((resp) => {
            resp.json().then(() => {
                setToast(true)
                setAction(false)
                getImpCall()
            })
        }).catch((error)=>{
            console.log(error)
        })
    }



    
    // const saveUpdate = () => {
    //     let data1 = {
    //         // username: username, 
    //         Name: name, Mobile:mobile, Gender:gender, Department:department , Designation:designation,  Doctype:doctype, Docname:docname
  
    //     }

        // fetch(`${url}/clothes/${id}`, {
        //     method: "PUT",
        //     headers: {
        //         "Authorization": `Bearer ${token}`,
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data1)
        // }).then((resp) => {
        //     resp.json().then(() => {
        //         alert("successfully submitted")
        //         setVisible(false)
        //         getImpCall()
        //     })
        // })
    // }

    // function deleteCall(id) {

    //     if (confirm('Do you want to delete this')) {
    //         fetch(`${url}/clothes/${id}`, {
    //             method: 'DELETE',
    //             headers: {
    //                 "Authorization": `Bearer ${token}`,
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json',
    //             },
    //         }).then((result) => {
    //             result.json().then(() => {
    //                 getImpCall()
    //             })
    //         })
    //     }
    // }

    const handleUpdate = (id) => {
        setId(id)
        getUpdate(id)
    }
    const clear = () => {
        setId('')
        setName('')
        setMobile('')
        setGender('')
        setDepartment('')
        setDoctype('')
        setDocname('')
        // setEmail('')
        // setCategory('')
        // setAddress('')
        // setCompany('')
    }

    // function getUpdate(id) {
    //     axios.get(`${url}/clothes/${id}`, {
    //         headers: {
    //             'Authorization': `Bearer ${token}`
    //         }
    //     })
    //         .then((res) => {
        
    //             setName(res.data.Name)
    //             setMobile(res.data.Mobile)
    //             setGender(res.data.gender)
    //             setDepartment(res.data.department)
    //             // setDoctype(res.data.doctype)
    //             setDocname(res.data.docname)

    //             // setEmail(res.data.Category)
    //             // setCategory(res.data.Color)
    //             // setAddress(res.data.Price)
    //             // setCompany(res.data.Total_Stock)
    //             // setAction(true)
    //             // getImpCall()
    //         })
    //         .catch((error) => {
    //             console.error(error)
    //         })
    // }
    return (
        <CRow className='d-flex mb-2'>
            <CCol lg={9} sm={6} className='mb-2'>
                <CToast autohide={true} visible={toast} color='success' className="align-items-center">
                    <div className="d-flex">
                        <CToastBody style={{ color: 'white' }}>Successfully Submitted.</CToastBody>
                        <CToastClose className="me-2 m-auto" />
                    </div>
                </CToast>
            </CCol>
            <CCol lg={3} sm={6} className='mb-2'>
                <CButton className="float-end" onClick={() => { setAction(!action), clear() }}>{action ? 'Close' : 'Add Employee document'}</CButton>
            </CCol>
            {action &&

                <CCard className="mt-2 mb-2" >
                    <CCardBody>
                        <CForm>
                            <CRow>
                                {/* <CCol lg={3} sm={6} >
                                    <CFormInput
                                        className="mb-1"
                                        type="text"
                                        id="exampleFormControlInput1"
                                        label="Product Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Enter Name"
                                    />
                                </CCol> */}
                                <CCol lg={3} sm={6} >
                                    <CFormInput
                                        className="mb-1"
                                        type="text"
                                        id="exampleFormControlInput1"
                                        label="Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Enter Name"
                                    />
                                </CCol>
                                <CCol lg={3} sm={6} >
                                    <CFormInput
                                        className="mb-1"
                                        type="text"
                                        id="exampleFormControlInput1"
                                        label="Mobile"
                                        value={mobile}
                                        onChange={(e) => setMobile(e.target.value)}
                                        placeholder="Enter Mobile"
                                    />
                                </CCol>
                                <CCol lg={3} sm={6} >
                                    <CFormInput
                                        className="mb-1"
                                        type="text"
                                        id="exampleFormControlInput1"
                                        label="Gender"
                                        value={gender}
                                        onChange={(e) => setGender(e.target.value)}
                                        placeholder="Enter Gender"
                                    />
                                </CCol>
                                <CCol lg={3} sm={6} >
                                    <CFormInput
                                        className="mb-1"
                                        type="text"
                                        id="exampleFormControlInput1"
                                        label="Department"
                                        value={department}
                                        onChange={(e) => setDepartment(e.target.value)}
                                        placeholder="Enter Department"
                                    />
                                </CCol>
                                <CCol lg={3} sm={6} >
                                    <CFormInput
                                        className="mb-1"
                                        type="text"
                                        id="exampleFormControlInput1"
                                        label="Designation"
                                        value={designation}
                                        onChange={(e) => setDesignation(e.target.value)}
                                        placeholder="Enter Designation"
                                    />
                                </CCol>
                                <CCol lg={3} sm={6} >
                                    <CFormInput
                                        className="mb-3"
                                        type="file"
                                        id="formFileMultiple"
                                        label="Multiple files input example"
                                        value={docname}
                                        onChange={(e) => setDocname(e.target.value)}
                                        placeholder="Enter Docname"
                                        multiple
                                    />
                                    {/* <div className="mb-3">
  <CFormInput type="file" id="formFileMultiple" label="Multiple files input example" multiple />
</div> */}
                                </CCol>
                                {/* <CCol lg={3} sm={6}>
                                    <CFormSelect
                                        className="mb-1"
                                        aria-label="Select Category"
                                        label="Stock Category"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        options={[
                                            "Select Category",
                                            { label: "Small Size", value: "Small Size" },
                                            { label: "L Size", value: "L Size" },
                                        ]}
                                    />
                                </CCol> */}
                                {/* <CCol lg={3} sm={6} >
                                    <CFormInput
                                        className="mb-1"
                                        type="text"
                                        id="exampleFormControlInput1"
                                        label="Doctype"
                                        value={doctype}
                                        onChange={(e) => setDoc(e.target.value)}
                                        placeholder="Enter Colour"
                                    />
                                </CCol> */}

                                {/* <CCol lg={3} sm={6} >
                                    <CFormInput
                                        className="mb-1"
                                        type="number"
                                        id="exampleFormControlInput1"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        label="Price"
                                        placeholder="Enter Price"
                                    />
                                </CCol> */}
{/* 
                                <CCol lg={3} sm={6} >
                                    <CFormInput
                                        className="mb-1"
                                        type="number"
                                        id="exampleFormControlInput1"
                                        value={company}
                                        onChange={(e) => setCompany(e.target.value)}
                                        label="Total Stock"
                                        placeholder="Enter Total Stock"
                                    />
                                </CCol> */}
                                




                                <CCol className="mt-4">
                                    {id
                                        ?
                                        <CButton onClick={() => saveUpdate()} >update</CButton>
                                        :
                                        <CButton onClick={() => { saveImpCall() }} >Save</CButton>
                                    }
                                </CCol>
                            </CRow>
                        </CForm>
                    </CCardBody>
                </CCard>
            }
            <CTable className='mt-3' align="middle" bordered style={{ borderColor: "#0B5345" }} hover responsive>
                <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                    <CTableRow >
                        <CTableHeaderCell>Sr.No</CTableHeaderCell>
                        <CTableHeaderCell>Name</CTableHeaderCell>
                        <CTableHeaderCell>Mobile</CTableHeaderCell>
                        <CTableHeaderCell>Gender</CTableHeaderCell>
                        <CTableHeaderCell>Department</CTableHeaderCell>
                        <CTableHeaderCell>Designation</CTableHeaderCell>
                        <CTableHeaderCell>Doctype</CTableHeaderCell>
                        <CTableHeaderCell>Docname</CTableHeaderCell>
                        <CTableHeaderCell>Edit/Delete</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    <CTableRow>
                        <CTableDataCell>
                            <CFormInput
                                className="mb-1"
                                style={{ minWidth: "60px" }}
                                type="text"
                                disabled
                                aria-describedby="exampleFormControlInputHelpInline"
                            />
                        </CTableDataCell>
                        {/* <CTableDataCell>
                            <CFormInput
                                className="mb-1"
                                type="text"
                                style={{ minWidth: "120px" }}
                                value={search1}
                                disabled
                                onChange={(e) => setSearch1(e.target.value)}
                                aria-describedby="exampleFormControlInputHelpInline"
                            />
                        </CTableDataCell>
                        <CTableDataCell>
                            <CFormInput
                                className="mb-1"
                                style={{ minWidth: "120px" }}
                                value={search2}
                                onChange={(e) => setSearch2(e.target.value)}
                                type="text"
                                aria-describedby="exampleFormControlInputHelpInline"
                            />
                        </CTableDataCell>
                        <CTableDataCell>
                            <CFormInput
                                className="mb-1"
                                style={{ minWidth: "100px" }}
                                value={search3}
                                onChange={(e) => setSearch3(e.target.value)}
                                type="text"
                                aria-describedby="exampleFormControlInputHelpInline"
                            />
                        </CTableDataCell>
                        <CTableDataCell>
                            <CFormInput
                                className="mb-1"
                                type="text"
                                style={{ minWidth: "200px" }}
                                value={search4}
                                onChange={(e) => setSearch4(e.target.value)}
                                aria-describedby="exampleFormControlInputHelpInline"
                            />
                        </CTableDataCell>
                        <CTableDataCell>
                            <CFormInput
                                className="mb-1"
                                style={{ minWidth: "120px" }}
                                value={search5}
                                onChange={(e) => setSearch5(e.target.value)}
                                type="text"
                                aria-describedby="exampleFormControlInputHelpInline"
                            />
                        </CTableDataCell>
                        <CTableDataCell>
                            <CFormInput
                                className="mb-1"
                                style={{ minWidth: "120px" }}
                                value={search6}
                                onChange={(e) => setSearch6(e.target.value)}
                                type="number"
                                aria-describedby="exampleFormControlInputHelpInline"
                            />
                        </CTableDataCell>
                         <CTableDataCell>
                            <CFormInput
                                className="mb-1"
                                style={{ minWidth: "120px" }}
                                type="number"
                                disabled
                                value={search7}
                                onChange={(e) => setSearch7(e.target.value)}
                                aria-describedby="exampleFormControlInputHelpInline"
                            />
                        </CTableDataCell>
                        <CTableDataCell>
                            <CFormInput
                                className="mb-1"
                                type="number"
                                style={{ minWidth: "120px" }}
                                disabled
                                value={search8}
                                onChange={(e) => setSearch8(e.target.value)}
                                aria-describedby="exampleFormControlInputHelpInline"
                            />
                        </CTableDataCell>
                        <CTableDataCell>
                            <CFormInput
                                className="mb-1"
                                type="number"
                                style={{ minWidth: "120px" }}
                                disabled
                                value={search9}
                                onChange={(e) => setSearch9(e.target.value)}
                                aria-describedby="exampleFormControlInputHelpInline"
                            />
                        </CTableDataCell> */}
                       
                
                   
                    </CTableRow>
                 
                    {result1.slice(paging * 10, paging * 10 + 10).map((item, index) => (
                        <CTableRow key={index}>
                            <CTableDataCell>{index + 1 + (paging * 10)}</CTableDataCell>
                            <CTableDataCell>{item.Name}</CTableDataCell>
                            <CTableDataCell>{item.Mobile}</CTableDataCell>
                            <CTableDataCell>{item.Gender}</CTableDataCell>
                            <CTableDataCell>{item.Department}</CTableDataCell>
                            <CTableDataCell>{item.Designation}</CTableDataCell>
                            <CTableDataCell>{item.Doctype}</CTableDataCell>
                            <CTableDataCell>{item.Docname}</CTableDataCell>
                            {/* <CTableDataCell>{item.Edit_Delete}</CTableDataCell> */}
                            {/* <CTableDataCell>{item.Available_Stock}</CTableDataCell> */}
                            <CTableDataCell className='text-center'><MdEdit id={item._id} style={{ fontSize: '35px', cursor: 'pointer', markerStart: '10px' }} onClick={() => handleUpdate(item._id)} size='20px' /> <MdDelete style={{ cursor: 'pointer', markerStart: '10px', marginLeft: "5px" }} onClick={() => deleteCall(item._id)} size='20px' /></CTableDataCell>
                        </CTableRow>
                    ))}
                </CTableBody>
            </CTable>

        </CRow>

    );
}

export default EmpOfDocuments
