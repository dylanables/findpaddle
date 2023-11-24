const router = require("express").Router();
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const Paddle = require("../models/Paddle");

//create paddle
router.post("/", verifyTokenAndAdmin, async (req, res)=>{
    const newProduct = new Paddle(req.body);

    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch(err) {
        res.status(500).json(err);
    }
});

//update paddle
router.put("/:id", verifyTokenAndAdmin, async (req,res)=>{
    try {
        const updatedPaddle = await Paddle.findByIdAndUpdate(
            req.params.id, 
            {
                $set: req.body
            }, 
            {new: true}
        );
        res.status(200).json(updatedPaddle);
    } catch(err) {
        res.status(500).json(err);
        console.log(err)
    }
});

//delete paddle
router.delete("/:id", verifyTokenAndAdmin, async (req,res)=> {
    try {
        await Paddle.findByIdAndDelete(req.params.id);
        res.status(200).json("Paddle has been deleted.");
    } catch(err) {
        res.status(500).json(err);
    }
});

//get paddle
router.get("/find/:id", async (req,res)=> {
    try {
        const paddles = await Paddle.findById(req.params.id);
        res.status(200).json(paddles);
    } catch(err) {
        res.status(500).json(err);
        console.log(err)
    }
});

//get all paddles
router.get("/", async (req,res)=> {
    const queryNew = req.query.new;
    const queryBrand = req.query.brand;
    try {
        let paddles;

        if (queryNew) {
            paddles = await Paddle.find().sort({createdAt: -1}).limit(5);
        } else if (queryBrand) {
            paddles = await Paddle.find({brand: {
                $in: [queryBrand],
            }});
        } else {
            paddles = await Paddle.find();
        }

        res.status(200).json(paddles);
    } catch(err) {
        res.status(500).json(err);
        console.log(err)
    }
});

module.exports = router;