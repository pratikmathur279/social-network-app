const express = require('express');
const sls = require('serverless-http')
const app = express();

const port = 3001;
const bodyParser = require('body-parser');
    const multer = require('multer');
    const uuidv4 = require('uuid/v4');
    const path = require('path');

    let newFilename = '';
    // configure storage
    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        /*
          Files will be saved in the 'uploads' directory. Make
          sure this directory already exists!
        */
        cb(null, '../public/assets/Images');
      },
      filename: (req, file, cb) => {
        /*
          uuidv4() will generate a random ID that we'll use for the
          new filename. We use path.extname() to get
          the extension from the original file name and add that to the new
          generated ID. These combined will create the file name used
          to save the file on the server and will be available as
          req.file.pathname in the router handler.
        */
        newFilename = `${uuidv4()}${path.extname(file.originalname)}`;
        cb(null, newFilename);
      },
    });
    // create the multer instance that will be used to upload/save the file
    const upload = multer({ storage });

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.listen(port, () => console.log(`Server listening on port ${port}`));

    app.post('/image-upload', upload.single('myImage'), (req, res) => {
      console.log('here');
      /*
        We now have a new req.file object here. At this point the file has been saved
        and the req.file.filename value will be the name returned by the
        filename() function defined in the diskStorage configuration. Other form fields
        are available here in req.body.
      */
      // res.data(newFilename);
      res.send(JSON.stringify(newFilename));
    });