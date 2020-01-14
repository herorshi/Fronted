import Users from './model'
import UsersSerializer from './serializer'
const UsersController = {
    getAll(req,res){
        console.log(Users,'Users');
        // res.send('Hello World')
        // console.log(Users,'Users');
        // console.log(uu,'UU');
        res.json({
            // users:Users.findAll()
            users:UsersSerializer.for('getAll',Users.findAll())
        })
    },
    get(req,res){
        res.json({
            // user:Users.find(req.params.id)
            user:UsersSerializer.for('get',Users.find(req.params.id))
        })
    },
    create(req,res){
        // console.log(req.body.email,'req.body.email');
        // const user = Users.create({email:req.body.email});
        // res.json({
        //     // user:user
        //     user:UsersSerializer.for('create',user)
        // })
        
        const { email,password } = req.body
        // const user = Users.create(email,password)
        header
        console.log("create-controller");
        Users.create(email,password).then(user => res.header("Authorization",`Bearer ${Users.getToken(user)}`).
                                                      status(201).
                                                      json({
                                                            user: UsersSerializer.for('create',user)
        }))
    },
    // gg(req,res){
    //     res.end('gg')
    // }
}

export default UsersController