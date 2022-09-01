import { Router } from "express";
import { pool } from "../db.js";

const router = Router();

router.get('/ping', async (req, res) => {
    const [rows] = await pool.query('SELECT 1 + 1 as result');
    console.log(rows);
    res.json("ping")
});

router.get('/tasks');
router.get('/tasks/:id');
router.post('/tasks');
router.put('/tasks/:id');
router.delete('/tasks/:id');

export default router;