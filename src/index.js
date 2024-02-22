const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const  taskRoutes = require('./routes/tasks.routes');

const app = express();




app.use(morgan('dev'));
app.use(express.json());
app.use(taskRoutes);
app.use(cors()); 
 

app.use((err,req,res,next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Origin', '<origin>');  // Esto permite cualquier origen
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
     
    
    next();
        return  Response.json ({
            
            message: err.message
        })
    })


app.listen(4000);
console.log('Server on port 4000')