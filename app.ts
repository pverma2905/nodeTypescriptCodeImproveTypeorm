import express, {Request, Response} from 'express';
import {router} from './src/router/routes';
import DB from './src/config/db.config'
const app = express();
const PORT = 8012;

DB()

app.get('/', (req: Request, res: Response) => {
    res.json({data:"yes done"})
})

app.use("/", router);
app.listen(PORT,()=>{
console.log(`Server is running on port ${PORT}`)
})

