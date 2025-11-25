import express from 'express';

import cors from 'cors';
import route from  './route/testing.js';

import cookieParser from 'cookie-parser';




var app = express();

app.use(cookieParser());

app.use(express.json());

app.use(cors({
    origin: "http://localhost:3000",  // or *
    credentials: true
  })
  )
app.use("/",route);



export default app;
