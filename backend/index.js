const LeaveSetup=require('./Master/HR/leaveSetup')
const ShiftTiming=require('./Master/HR/shiftTiming')
const EmployeeDocument=require('./HRManagement/employeeDocument')














//HR

//leaveSetup
//to save leavesetup
app.post('/leavesetup',async(req,res)=>{
    try{
     const leaveSetup= await LeaveSetup.create(req.body)
     res.status(200).json(leaveSetup);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get leaveSetup
 app.get('/leavesetup',async(req,res)=>{
    try{
        const  leaveSetup= await  LeaveSetup.find({});
        res.status(200).json(leaveSetup);
    }catch(error){
        res.status(5009).json({message:error.message})
    }
})

//to  get leave Setup by id
app.get('/leavesetup/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   leaveSetup = await  LeaveSetup.findById(id);
        res.status(200).json( leaveSetup);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update leave Setup by id
app.put('/leavesetup/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   leaveSetup= await  LeaveSetup.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!leaveSetup){
            return res.status(404).json({message:`cannot find any leave Setup with ${id}`})
        }
        const updatedLeaveSetup = await  LeaveSetup.findById(id);
        res.status(200).json( updatedLeaveSetup);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a leave setup
app.delete('/leavesetup/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   leaveSetup = await  LeaveSetup.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!leaveSetup){
            return res.status(404).json({message:`cannot find any leave setup with ${id}`})
        }
        
        res.status(200).json(leaveSetup);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})



//shift timing
//to save shift timing
app.post('/shifttiming',async(req,res)=>{
    try{
     const shiftTiming= await ShiftTiming.create(req.body)
     res.status(200).json(shiftTiming);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get shift timing
 app.get('/shifttiming',async(req,res)=>{
    try{
        const  shiftTiming= await  ShiftTiming.find({});
        res.status(200).json(shiftTiming);
    }catch(error){
        res.status(5009).json({message:error.message})
    }
})

//to  get shift Timing by id
app.get('/shifttiming/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   shiftTiming = await  ShiftTiming.findById(id);
        res.status(200).json( shiftTiming);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update leave Setup by id
app.put('/shifttiming/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   shiftTiming= await  ShiftTiming.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!shiftTiming){
            return res.status(404).json({message:`cannot find any shift timing with ${id}`})
        }
        const updatedShiftTiming = await  ShiftTiming.findById(id);
        res.status(200).json( updatedShiftTiming);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a shift Timing
app.delete('/shifttiming/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   shiftTiming = await  ShiftTiming.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!shiftTiming){
            return res.status(404).json({message:`cannot find any shift timing with ${id}`})
        }
        
        res.status(200).json(shiftTiming);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


//HR Managment
//employee document
app.post('/employeedocument',async(req,res)=>{
    try{
     const employeeDocument= await EmployeeDocument.create(req.body)
     res.status(200).json(employeeDocument);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get Employee Document
 app.get('/employeedocument',async(req,res)=>{
    try{
        const  employeeDocument= await  EmployeeDocument.find({});
        res.status(200).json(employeeDocument);
    }catch(error){
        res.status(5009).json({message:error.message})
    }
})

//to  get employee Document by id
app.get('/employeedocument/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   employeeDocument = await  EmployeeDocument.findById(id);
        res.status(200).json( employeeDocument);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update employee Document by id
app.put('/employeedocument/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   employeeDocument= await  EmployeeDocument.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!employeeDocument){
            return res.status(404).json({message:`cannot find any employee Documentwith ${id}`})
        }
        const updatedEmployeeDocument = await  EmployeeDocument.findById(id);
        res.status(200).json( updatedEmployeeDocument);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a Employee Document
app.delete('/employeedocument/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const   employeeDocument = await  EmployeeDocument.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!employeeDocument){
            return res.status(404).json({message:`cannot find any Employee Document with ${id}`})
        }
        
        res.status(200).json(employeeDocument);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


