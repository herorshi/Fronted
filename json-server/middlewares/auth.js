import jwt from 'jsonwebtoken'
// import config from '../../config'
import config from '../config'
import { Users } from '../app/users'
export default function(req,res,next){
    console.log("AUTH");
    const authHeader = req.header('Authorization') // get ตัว header ที่กำหนดมาใน ajaxหรือ postman ว่ามีค่าเป็นอะไร
    // console.log(authHeader,'authHeader');
    if(!authHeader) return next();
    const accessToken = authHeader.match(/Bearer (.*)/)[1]
    // console.log(accessToken,'accessToken');

    jwt.verify(accessToken,config.secretKey,(err,decoded)=>{ //ตรวจสอบ autentication
        if(err) return next()
        req.user = Users.find(decoded.sub)
        next();
    })
}