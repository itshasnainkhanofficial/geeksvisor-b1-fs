import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
const app = express()


dotenv.config();
const port = 3500
app.use(express.json()); // Middleware to parse JSON requests

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });




// get requests
app.get('/', (req, res) => {
  res.send('get root route')
})

app.get('/user', (req, res) => {
  res.send('get user')
})

app.get('/post', (req, res) => {
  res.send('get post')
})




// post requests
app.post('/', (req, res) => {
  res.send('post root route')
})

app.post('/user', (req, res) => {
  res.send('post user')
})

app.post('/post', (req, res) => {
  res.send('post user_post')
})





// Define a schema for a sample MongoDB model
const Schema = mongoose.Schema;
const sampleSchema = new Schema({
  name: String,
  age: Number
});
const SampleModel = mongoose.model('Person', sampleSchema);



// Read (all samples)
app.get('/myuser', async (req, res) => {
    // console.log("my user get running")
    try {
      const samples = await SampleModel.find();
    //   console.log({samples})
      res.json(samples);
    } catch (error) {
      console.error('Error reading samples:', error);
      res.status(500).json({ error: 'Server error' });
    }
  });


// Create
app.post('/myuser',  (req, res) => {
    // console.log('myuser running')
    // console.log(req.body)
    // const { myname, myage } = req.body;
    // console.log(myname)
    // console.log(myage)
    try {
      const { myname, myage } = req.body;
      const sample = new SampleModel({ name: myname, age: myage });
    //   console.log(sample)
      sample.save();
      res.status(201).json(sample);
    } catch (error) {
      console.log('Error creating sample:', error);
      res.status(500).json({ error: 'Server error' });
    }
  });


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})