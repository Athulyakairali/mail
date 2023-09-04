const nodemailer=require("nodemailer");
const transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"ehhhhkayyy@gmail.com",
        pass:"berlmkuxxbvqubim"
    }
});
const mailoptions={
    from: "ehhhhkayyy@gmail.com",
    to: "lokyjr7@gmail.com",
    subject:"NodemailerTest",
    text:"Test sending Gmail using nodejs"
};
transporter.sendMail(mailoptions,function(error,info){
if(error){
    console.log(error);
}else{
    console.log("Email sent: "+info.response);
    // console.log(__dirname);
}
});