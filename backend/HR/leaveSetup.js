const mongoose = require('mongoose')

const LeaveSetupSchema = mongoose.Schema(
    {
         Sr_No: {
            type: String,
            },
        No_Of_Leave: {
            type: String,
            },
        No_Of_Seek_Leave: {
            type: String,    
            },
        No_Of_Casual_Leave: {
            type: String,
            },
        No_Of_Paid_Leave: {
            type: String,
            },  
    },
)

const LeaveSetup = mongoose.model('LeaveSetup', LeaveSetupSchema);


module.exports = LeaveSetup;