// import db from '../../db'
const bcrypt = require('bcryptjs');
import Model from '../model'
import jwt from 'jsonwebtoken'
import config from '../../config'
const Users = {
    ...Model,
    key:'users',
    permittedAttrs:['email'],
    create(email,password){
        return new Promise((resolve, reject) =>{
            console.log("promist");
            bcrypt.hash(password,12,(error,hash)=>{
                // if(error) return reject(error)
                //  console.log(this);
                const collection = this.collection(); 
                const user = {
                     id:collection.length +1,
                     email,
                     password:hash,
                     isAdmin:false
                 };
                 this.setCollection([...collection,user])
                 return resolve(user)
            })
        });

    },
    getToken(user){
        console.log("get-token");
        return jwt.sign({sub:user.id},config.secretKey,{ expiresIn:'1h' })
    },
    findByEmail(email){
        return this.collection().find(user => { 
            return  user.email === email
         })
    },
    verify(user,password){
        return  new Promise(function(resolve, reject) {
              const hash = user.password;
              console.log(password,'password');
              console.log(hash,'hash');
              bcrypt.compare(password,hash,(error,isValid)=>{
                  console.log(isValid);
                  if(error) return reject(err)
                  return resolve(isValid)            
              })
        });
    }

}
export default Users