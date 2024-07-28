import nodemailer from "nodemailer";


export const sendEmail = async(options) => {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailsOptions = {
        from: options.email,
        to:process.env.EMAIL_USER,
        subject: options.subject,
        text:`${options.message} \n\nEmail of User Who Sent The Message: ${options.userEmail}`
    };

    transporter.sendMail(mailsOptions, (info, error) => {
        if(error){
           return res.status(500).send(error.toString())
        }

        res.status(200).send("Email sent: ", info.response);
    });
}