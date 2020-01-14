// import Users from '../users/model'
import { Users } from '../users'
import SessionsSerializer from './serializer'


const SessionsController = {
    create(req,res){
      
        const  { email,password } = req.body
        const user = Users.findByEmail(email);
        console.log(email,password);
        Users.verify(user,password).then(isValid =>{
            if(isValid){
                
                res.header("Authorization",`Bearer ${Users.getToken(user)}` ).
                status(201).
                json({user:SessionsSerializer.for('create',user)})
            
            }else{
                res.status(401).json({
                    user:{
                        erros:['invalid credentials.']
                    }
                })
            }
        })
    },

   

}


export default SessionsController