import controller from './controller'

export function setup(router){
    // router.get('/') //.get(/users)
    // router.get('/:id') //.get('users/:id')
    // router.get('/',(req,res)=>{ res.send("Hello World"); })
    router.get('/:id',controller.get)
          .get('/',controller.getAll)
          .post('/',controller.create)
}


