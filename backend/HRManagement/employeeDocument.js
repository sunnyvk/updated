const mongoose = require('mongoose')

const employeeDocumentSchema = mongoose.Schema(
    {
        Sr_No: {
            type: String,
        },
        Name: {
            type: String,
        },
        Mobile: {
            type: String,
        },
        Gender: {
            type: String,
        },
        Department: {
            type: String,
        },
        Designation: {
            type: String,
        },
        Doctype: {
            type: String,
        },
        Docname: {
            type: String,
        },
        Edit_Delete: {
            type: String,
        }
      
    },
)

const EmployeeDocument = mongoose.model('EmployeeDocument', employeeDocumentSchema);


module.exports = EmployeeDocument;