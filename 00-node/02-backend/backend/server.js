import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

// get a list of 5 jokes
app.get('/jokes',(req,res)=>{
    const jokes = [
        {
            id:1,
            title: 'A Joke',
            content:'This is  joke'
        },
        {
            id:1,
            title: 'A Joke',
            content:'This is  joke'
        },
        {
            id:1,
            title: 'A Joke',
            content:'This is  joke'
        },
        {
            id:1,
            title: 'A Joke',
            content:'This is  joke'
        },
        {
            id:1,
            title: 'A Joke',
            content:'This is  joke'
        },
    ]
    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server is running at ${port}`);
})