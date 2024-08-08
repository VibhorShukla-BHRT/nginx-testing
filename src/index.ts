import express from "express";
import cors from "cors"
const app:express.Application = express();
app.use(express.json())
app.use(cors());

app.get("/",(req,res)=>{
    
    return res.json({
        message: "hello form nginx deloyment!"
    })
})

app.listen(3000,()=>{
    console.log("Server listening to PORT: 3000");
})

