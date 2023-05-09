const mongoose = require('mongoose')

const ShiftTimingSchema = mongoose.Schema(
    {
         Sr_No: {
            type: String,
            },
        Shift_Name: {
            type: String,
            },
        Start_Time: {
            type: String,    
            },
        End_Time: {
            type: String,
            },
        Action: {
            type: Boolean,
            }, 
        Edit_Delete: {
            type: String,
            }, 
    },
)

const ShiftTiming = mongoose.model('ShiftTiming', ShiftTimingSchema);


module.exports = ShiftTiming;