const router = require("express").Router();
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const Account = require("../models/Account");
const CryptoJS = require("crypto-js");

//update account
router.put("/:id", verifyTokenAndAuthorization, async (req,res)=>{
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECRET_KEY).toString();
    }

    try {
        const updatedAccount = await Account.findByIdAndUpdate(
            req.params.id, 
            {
                $set: req.body
            }, 
            {new: true}
        );
        res.status(200).json(updatedAccount);
    } catch(err) {
        res.status(500).json(err);
        console.log(err)
    }
});

//delete account
router.delete("/:id", verifyTokenAndAuthorization, async (req,res)=> {
    try {
        await Account.findByIdAndDelete(req.params.id);
        res.status(200).json("Account has been deleted.");
    } catch(err) {
        res.status(500).json(err);
    }
});

//get account
router.get("/find/:id", verifyTokenAndAdmin, async (req,res)=> {
    try {
        const account = await Account.findById(req.params.id);
        const { password, ...others } = account._doc;
        res.status(200).json(others);
    } catch(err) {
        res.status(500).json(err);
        console.log(err)
    }
});

//get all accounts
router.get("/", verifyTokenAndAdmin, async (req,res)=> {
    const query = req.query.new
    try {
        const accounts = query ? await Account.find().sort({_id:-1}).limit(5) : await Account.find();
        //const { password, ...others } = account._doc;
        res.status(200).json(accounts);
    } catch(err) {
        res.status(500).json(err);
        console.log(err)
    }
});

// user stats
router.get("/stats", verifyTokenAndAdmin, async (req, res)=>{
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear-1));

    try {
        const data = await Account.aggregate([
            {$match: {createdAt: {$gte:lastYear}}},
            {
                $project:{
                    month: {$month: "$createdAt"}
                }
            },
            {
                $group:{
                    _id: "$month",
                    total: {$sum: 1}
                }
            }
        ]);
        res.status(200).json(data);
    } catch(err) {
        res.status(500).json(err)
    }
});

module.exports = router;