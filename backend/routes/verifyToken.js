const jwt = require("jsonwebtoken");

const verifyToken = (req,res,next)=> {
    const authHeader = req.headers.token;

    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err,account)=>{
            if (err) res.status(403).json("Token is not valid.");
            req.account = account;
            next();
        });
    } else {
        return res.status(401).json("You are not authenticated.");
    }
};

const verifyTokenAndAuthorization = (req, res, next)=> {
    verifyToken(req,res,()=>{
        if (req.account.id === req.params.id || req.account.isAdmin) {
            //can update user
            next()
        } else {
            res.status(403).json("You are not authorized to perform that.")
        }
    })
};

const verifyTokenAndAdmin = (req, res, next)=> {
    verifyToken(req,res,()=>{
        if (req.account.isAdmin) {
            //can update user
            next()
        } else {
            res.status(403).json("You are not authorized to perform that.")
            console.log(req.account)
        }
    })
};

module.exports = { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin };