// import Aticles from './model'
import Articles from './model'
import ArticlesPolicy from './policy'

const ArticlesController = {
    getAll(req,res){
        console.log(req.user);
        // console.log(Articles,'Articles');
        // const  { page,perPage } = req.query
        // const articles = Articles.paginate({},page,perPage);
        // res.json({articles})
        res.json({article: Articles.findAll() })
    },
    get(req,res){
        res.json({ article: Articles.find(req.params.id) })
    },
    create(req,res){
        if (ArticlesPolicy.for('create',req.user)) {
            const article =  Articles.create(req.body)
            res.status(201).json({article})
        }else{
            res
             res.status(401)
             .json({
                 article:{
                     errors:['You are not allowed to create the article.']
                 }
             })
        }

    },
    update(req,res){
        const id = req.params.id
        if (ArticlesPolicy.for('update',req.user,Articles.find(id))) {
            const article = Articles.update(id,req.body)
            res.status(200).json({article})
        }
        else{
            res
             res.status(401)
             .json({
                 article:{
                     errors:['You are not allowed to create the article.']
                 }
             })
        }
    },
    destroy(req,res){

        if (ArticlesPolicy.for('update',req.user,Articles.find(id))) {
            const id = req.params.id
            Articles.destroy(id)
            res.status(204)
        }
        else{
            res
             res.status(401)
             .json({
                 article:{
                     errors:['You are not allowed to create the article.']
                 }
             })
        }



    }
}

export default ArticlesController