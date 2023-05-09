const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');

const { EMAIL, PASSWORD } = require('../env.js')

/** send mail from testing account */
// const signup = async (req, res) => {

    /** testing account */
    // let testAccount = await nodemailer.createTestAccount();

      // create reusable transporter object using the default SMTP transport
    // let transporter = nodemailer.createTransport({
    //     host: "smtp.ethereal.email",
    //     port: 587,
    //     secure: false, // true for 465, false for other ports
    //     auth: {
    //         user: testAccount.user, // generated ethereal user
    //         pass: testAccount.pass, // generated ethereal password
    //     },
    // });

    // let message = {
    //     from: '"Fred Foo 👻" <foo@example.com>', // sender address
    //     to: "bar@example.com, baz@example.com", // list of receivers
    //     subject: "Hello ✔", // Subject line
    //     text: "Successfully Register with us.", // plain text body
    //     html: "<b>Successfully Register with us.</b>", // html body
    //   }


    // transporter.sendMail(message).then((info) => {
    //     return res.status(201)
    //     .json({ 
    //         msg: "you should receive an email",
    //         info : info.messageId,
    //         preview: nodemailer.getTestMessageUrl(info)
    //     })
    // }).catch(error => {
    //     return res.status(500).json({ error })
    // })

    // res.status(201).json("Signup Successfully...!");
// }

/** send mail from real gmail account */
// const getbill = (req, res) => {

    // const { userEmail } = req.body;
    // const { emails } = req.body;

    // let config = {
    //     service : 'gmail',
    //     auth : {
    //         user: EMAIL,
    //         pass: PASSWORD
    //     }
    // }

    // let transporter = nodemailer.createTransport(config);

    // let MailGenerator = new Mailgen({
    //     theme: "default",
    //     product : {
    //         name: "Mailgen",
    //         link : 'https://mailgen.js/'
    //     }
    // })

    // let response = {
    //     body: {
    //         name : "Daily Tuition",
    //         intro: "Your bill has arrived!",
    //         table : {
    //             data : [
    //                 {
    //                     item : "Nodemailer Stack Book",
    //                     description: "A Backend application",
    //                     price : "$10.99",
    //                 }
    //             ]
    //         },
    //         outro: "Looking forward to do more business"
    //     }
    // }

    // let mail = MailGenerator.generate(response)

    // let message = {
    //     from : EMAIL,
    //     to : 
    //     subject: "Place Order",
    //     html: mail
    // }

//     transporter.sendMail(message).then(() => {
//         return res.status(201).json({
//             msg: "you should receive an email"
//         })
//     }).catch(error => {
//         return res.status(500).json({ error })
//     })

//     res.status(201).json("getBill Successfully...!");
// }

// const getbill = (req, res) => {


//     const {  emailList ,message } = req.body;
//     const emailArray = emailList.split(',').map((email) => email.trim());

//     let config = {
//         service : 'gmail',
//         auth : {
//             user: EMAIL,
//             pass: PASSWORD
//         }
//     }

//     let transporter = nodemailer.createTransport(config);

  


//     //  let message = {
//     //     from : EMAIL,
//     //     to : userEmail
//     //     subject: "Place Order",
//     //     html: `Dear user,\n\nMessage:\n${message}\n\nBest regards,\nThe sender`
//     // }

// emailArray.forEach((userEmail) => {
//     const mailOptions = {
//       from: 'EMAIL',
//       to: userEmail,
//       subject: `New message from ${emailList}`,
//       text: `Dear user,\n\nYou have received a new message from  (${emailList}).\n\nMessage:\n${message}\n\nBest regards,\nThe sender`
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log(`Email sent to ${userEmail}: ` + info.response);
//       }
//     });


//   res.send('Emails sent successfully');
// });
// }



// const getbill = (req, res) => {

//     // const { userEmail } = req.body;
//     // const { emails } = req.body;


//     const [emailList , messages]=req.body;
//     // const { messages } = req.body;
//     const emailArray = emailList.split(',').map((email) => email.trim());

//     let config = {
//         service : 'gmail',
//         auth : {
//             user: EMAIL,
//             pass: PASSWORD
//         }
//     }

//     let transporter = nodemailer.createTransport(config);

//     // let MailGenerator = new Mailgen({
//     //     theme: "default",
//     //     product : {
//     //         name: "Mailgen",
//     //         link : 'https://mailgen.js/'
//     //     }
//     // })

//     // let response = {
//     //     body: {
//     //         name : "Daily Tuition",
//     //         intro: "Your bill has arrived!",
//     //         table : {
//     //             data : [
//     //                 {
//     //                     item : "Nodemailer Stack Book",
//     //                     description: "A Backend application",
//     //                     price : "$10.99",
//     //                 }
//     //             ]
//     //         },
//     //         outro: `Looking forward to do more business ${messages}`
//     //     }
//     // }

//     // let mail = MailGenerator.generate(response)

//     emailArray.forEach((userEmail) => {
//     let message = {
//         from : EMAIL,
//         to : userEmail,
//         subject: "Place Order",
//         html: `Hello world ${messages}`
//     }

//     transporter.sendMail(message).then(() => {
//         return res.status(201).json({
//             msg: "you should receive an email"
//         })
//     }).catch(error => {
//         // return res.status(500).json({ error })
//     })

//     // res.status(201).json("getBill Successfully...!");
// });
// }






// const getbill = (req, res) => {

//     // const {  } = req.body;
//     const EMAILS=['khambayatsunny278@gmail.com','losit40418@in2reach.com']
//     const { messages } = req.body;

//     let config = {
//         service : 'gmail',
//         auth : {
//             user: EMAIL,
//             pass: PASSWORD
//         }
//     }

//     let transporter = nodemailer.createTransport(config);

//     let MailGenerator = new Mailgen({
//         theme: "default",
//         product : {
//             name: "Mailgen",
//             link : 'https://mailgen.js/'
//         }
//     })

//     let response = {
//         body: {
//             name : "Daily Tuition",
//             intro: "Your bill has arrived!",
//             table : {
//                 data : [
//                     {
//                         item : "Nodemailer Stack Book",
//                         description: "A Backend application",
//                         price : "$10.99",
//                     }
//                 ]
//             },
//             outro: `Looking forward to do more business ${messages}`
//         }
//     }

//     let mail = MailGenerator.generate(response)

//     let message = {
//         from : EMAIL,
//         to :EMAILS,
//         subject: "Place Order",
//         html: mail
//     }

//     transporter.sendMail(message).then(() => {
//         return res.status(201).json({
//             msg: "you should receive an email"
//         })
//     }).catch(error => {
//         // return res.status(500).json({ error })
//     })

//     res.status(201).json("getBill Successfully...!");
// }



// const router = new express.Router();

// router.post("/getbill",  (req, res) => {

//     const { email } = req.body;
  

//     try {

//         const transporter = nodemailer.createTransport({
//             service: "gmail",
//             auth: {
//                 user: process.env.EMAIL,
//                 pass: process.env.PASSWORD
//             }
//         });

//         const mailOptions = {
//             from: process.env.EMAIL,
//             to: email,
//             subject: "Sending Email With React And Nodejs",
//             html: '<h1>Congratulation</h1> <h1> You successfully sent Email </h2>'
//         };

//         transporter.sendMail(mailOptions, (error, info) => {
//             if (error) {
//                 console.log("Error" + error)
//             } else {
//                 console.log("Email sent:" + info.response);
//                 res.status(201).json({status:201,info})
//             }
//         })

//     } catch (error) {
//         console.log("Error" + error);
//         res.status(401).json({status:401,error})
//     }
// });


// module.exports = router;




// module.exports = {
//     getbill
// }