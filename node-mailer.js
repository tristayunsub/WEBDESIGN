//using nodemailer https://nodemailer.com/about/, https://mailtrap.io/inboxes
const nodemailer = require('nodemailer');

const email = {
    "host": "smtp.mailtrap.io",
    "port": 2525,
    "secure": false,
    auth: {
        "user": "<your auth>", // generated ethereal user
        "pass": "<your password>", // generated ethereal password
   },
}


const send = async (data) => {
    nodemailer.createTransport(email).sendMail(data, function(error, info){
        if(error) {
            console.log(error);
        }else {
            console.log(info);
            return info.response;
        }
    });
};

const content = {
   from:"<email.address>",
   to : "<email-address>",
   subject: "개발자의 품격",
//    text:"개발자의 품격 - nodeemailer를 이용한 이메일 보내기 구현"
   html:"<h2>공부 열심히 하자</h2>"
};

send(content);