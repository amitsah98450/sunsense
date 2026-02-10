import dotenv from 'dotenv';
import express from 'express'
import axios from 'axios'
import cors from 'cors';

dotenv.config();  // Load .env file

const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use(cors());

app.get("/api/uv", async (req, res) => {
    try{
        const lat = req.query.lat;
        const lng = req.query.lng;

        if(!lat || !lng){
            return res.status(400).json({error:"latitude and longitude are required"})
        }
        const response = await axios.get("https://api.openuv.io/api/v1/uv", {
            params: { lat:lat, lng:lng},
            headers:{"x-access-token": process.env.OPENUV_API_KEY}  // Now this will work!
        })
        res.json(response.data);
        console.log(response.data);
    } catch(error){
        console.error("failed to fetch that data: ", error.message);
        res.status(500).json({error : "unable to fetch the data"});
    }
})

app.listen(port, () => {
    console.log(`listening on the port ${port}`);
})