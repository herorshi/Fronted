import Policy from '../policy'

const ArticlesPolicy = {
    ...Policy,
    create(user){
        return !!user
    },
    update(user,article){
        console.log(user);
        console.log(article);
        console.log("=======================");
        return user && user.id === article.authorId
    },
    destroy(user,article){
        return user && (user.isAdmin || user.id === article.authorId )
    }
}


export default ArticlesPolicy