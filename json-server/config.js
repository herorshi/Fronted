require('dotenv').config();
console.log(process.env.PORT,'ENV_PORT');
console.log(process.env.SECRET_KEY,'SECRET_KEY');
export default {
    // secretKey:'secret'
    port:process.env.PORT || 5000,
    secretKey:process.env.SECRET_KEY
    // secretKey:'sercret'
    // secretKey:process.env.SECRET_KEY
}