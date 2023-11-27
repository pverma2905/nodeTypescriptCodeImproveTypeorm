import express, {Request, Response} from 'express';
import UserCtrl from '../controllers/UserCtrl';
const router = express.Router();

router.get('/about', (req: Request, res: Response) => {
    res.json({message:"About Page"})
})

router.get('/home', UserCtrl.getList)

export { router };