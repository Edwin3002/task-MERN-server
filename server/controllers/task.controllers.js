import {pool} from "../db.js";

export const getTasks = async (req, res) =>{
    const [result] = await pool.query('SELECT * FROM tasks')
    res.json(result);
};

export const getTask = async (req, res) =>{
    const [result] = await pool.query('SELECT * FROM tasks WHERE id = ?', [req.params.id]);

    if(!result[0]){
        return res.status(404).json('Not found')
    }
    res.json(result[0]);
};

export const createTask = async (req, res) =>{
    const {task, date} = req.body;
    const [result] = await pool.query('INSERT INTO tasks(task, date) VALUES (?, ?)', [task, date])
    res.json({task, date,id: result.insertId});
};

export const updateTask = async (req, res) =>{


    const [result] = await pool.query('UPDATE tasks SET ? WHERE id = ?', [  req.body, req.params.id])
    res.send('update task');

};
export const deleteTask = async (req, res) =>{
    const [result] = await pool.query('DELETE FROM tasks WHERE id = ?', [req.params.id])
    
    if(result.affectedRows === 0)
    return res.status(404).json("Not found task to delete")
    
    return res.sendStatus(204)
};

