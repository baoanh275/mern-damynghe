const router = require("express").Router();
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')
const fs = require('fs')




// Upload image only admin can use
/* router.post('/upload',auth , authAdmin, (req, res) =>{
    try {
        if(!req.files || Object.keys(req.files).length === 0)
            return res.status(400).json({msg: 'No files were uploaded.'})
        
        const file = req.files.file;
        if(file.size > 1024*1024) {
            removeTmp(file.tempFilePath)
            return res.status(400).json({msg: "Size too large"})
        }

        if(file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png'){
            removeTmp(file.tempFilePath)
            return res.status(400).json({msg: "File format is incorrect."})
        }

        cloudinary.v2.uploader.upload(file.tempFilePath, {folder: "test"}, async(err, result)=>{
            if(err) throw err;

            removeTmp(file.tempFilePath)

            res.json({public_id: result.public_id, url: result.secure_url})
        })


    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}) */

router.post("/upload" ,upload.array("image"), async (req, res) => {
    try {
      // Upload image to cloudinary
      //const result = await cloudinary.uploader.upload(req.files.path);
      var result = [];
      
      for(var i=0;i<req.files.length;i++ ){
     
        const result2 = await cloudinary.uploader.upload(req.files[i].path,{folder: "damynghe"}, async(err, result)=>{
            if(err) throw err;

            removeTmp(req.files[i].path)
        });
        result.push({
            public_id: result2.public_id,
            url: result2.secure_url
        })
        

      }
      console.log(result)
     
      res.json(result)
    } catch (err) {
      console.log(err);
    }
  });

// Delete image only admin can use
/* router.post('/destroy',auth , authAdmin, (req, res) =>{
    try {
        const {public_id} = req.body;
        if(!public_id) return res.status(400).json({msg: 'No images Selected'})

        cloudinary.v2.uploader.destroy(public_id, async(err, result) =>{
            if(err) throw err;

            res.json({msg: "Deleted Image"})
        })

    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
    
}) */

router.post("/destroy", async (req, res) => {
    try {        
        console.log(req.body.public_id)
            
        if(!public_id) return res.status(400).json({msg: 'No images Selected'})
        // Delete image from cloudinary
        await cloudinary.uploader.destroy(req.body.public_id, async(err, result) =>{
            if(err) throw err;

            res.json({msg: "Deleted Image"})
        });
       
       
    } catch (err) {
      console.log(err);
    }
  });


const removeTmp = (path) =>{
    fs.unlink(path, err=>{
        if(err) throw err;
    })
}

module.exports = router