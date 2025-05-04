const nodemailer =  require('nodemailer');

class EmailService{
     constructor(){
        this.transport = nodemailer.createTransport({
            service: 'gmail',
            auth:{
                user: process.env.EMAIL,
                pass : process.env.PASSWORD,
            }
        });

        this.mailOption = {
            from: process.env.EMAIL,
            to: '',
            subject: 'OTP verfication',
            html:''
        };
     }

     async sendOtp(email, otp){
        this.mailOption.to = email;
        this.mailOption.html = `<h1>OTP for verification is ${otp}</h1>`;
        
     await this.transport.sendMail(this.mailOption);
     }
}

const emailService = new EmailService();
module.exports = emailService;