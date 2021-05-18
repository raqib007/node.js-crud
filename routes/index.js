const router = require('express').Router();

router.get('/',(req,res)=>{
   res.send({message:'Welcome to node crud!'});
});

module.exports = router;