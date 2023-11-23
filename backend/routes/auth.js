const router = require("express").Router();
const Account = require("../models/Account");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const formParser = bodyParser.urlencoded({extended:false});

//register
router.post("/register", jsonParser, async (req,res)=>{

    try {
        const newAccount = new Account({
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECRET_KEY).toString(),
        });
        const savedAccount = await newAccount.save();
        res.status(201).json(savedAccount);
    } catch(err) {
        res.status(500).json(err);
        console.log(err)
    }

});

//login

router.post("/login", formParser, async (req, res)=>{
    try {
        const account = await Account.findOne({ email: req.body.email });

        !account && res.status(401).json("Wrong login");
        
        const decryptedPassword = CryptoJS.AES.decrypt(account.password, process.env.PASS_SECRET_KEY);
        const stringPassword = decryptedPassword.toString(CryptoJS.enc.Utf8);

        stringPassword !== req.body.password && res.status(401).json("Wrong login");

        const accessToken = jwt.sign(
        {
            id: account._id,
            isAdmin: account.isAdmin,
        }, 
            process.env.JWT_SECRET_KEY,
            {expiresIn:"3d"}
        );

        const { password, ...others } = account._doc;

        res.status(200).json({...others, accessToken});
    } catch(err) {
        res.status(500).json(err);
        console.log(err)
    }
    
});

module.exports = router;