var express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const Notice = require('../schemas/noticeSchema');
const User = require('../schemas/userSchema');
const Subscriber = require('../schemas/subscriberSchema');
var router = express.Router();

var debug = require('debug')('api:server');


app.use(express.json());


var subscribers;
async function getSubscribers(notice){
  subscribers = await Subscriber.find()
  .select({email:1});
  sendEmails(notice);
  debug(subscribers);
}
//const Notice = mongoose.model('Notice',noticeSchema);
//var mails=["stuhub6.9@gmail.com","sk767285@outlook.com"];

function sendEmails(notice){
  debug("sending emails...",notice);

  const output= `
  <h3>Greetings from PCON-NITJSR</h3>
  <p>It gives us immence pleasure to inform you that we are conducting ${notice.head} from ${notice.from} to
  ${notice.to} .</p>
  <p>${notice.body}</p>
  <br>
  <p>Thank You</p>`;


  var transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
          user: 'sk767285@gmail.com',
          pass: 'mail99@Sk'
      }
  });

    // setup email data with unicode symbols
    for(var i=0;i<subscribers.length;i++)
    {
    let mailOptions = {
        from: '"pcon-nitjsr" <sk767285@gmail.com>', // sender address
        to: subscribers[i].email, // list of receivers
        subject: 'Notice', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    });
  }
}


/* GET users listing. */
router.get('/',(req, res)=> {
  Notice.find({},function (err,notice) {
    if(err) throw err;
    res.json(notice)
  }).sort({time: -1});
});

router.post('/',(req,res)=>{
  const notice = new Notice({
    head : req.body.head,
    body : req.body.body,
    from : req.body.from,
    to : req.body.to
  });
  const result= notice.save();

  //res.writeHead(200,{'Content-Type':'text/plain'});
  res.json(notice);
  getSubscribers(notice);
  debug(result);
});

module.exports = router;
