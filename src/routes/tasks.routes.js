const { Router } = require('express');
const { getAlltasks, getTask, createTask, updateTask, deleteTask} = require('../controllers/tasks.controller');
const pool = require('../db');

const router  = Router();

/*router.get('/',(req,res)=>{

    res.send('Hello world')
})*/
/*rrouter.get('/tasks',async(req,res)=>{
    const result = await pool.query('SELECT NOW()')

    res.json(result.rows[0].now)
})*/
router.get('/tasks', getAlltasks);

router.get('/tasks/:id', getTask);

router.post('/tasks/', createTask);

router.delete('/tasks/:id', deleteTask);

router.post('/tasks/:id', updateTask);






module.exports = router;
