const Pagination = {
    paginate(conditions,page = 1,perPage =5){
        console.log(conditions,page,perPage,'Paginate');
        const queryResults = this.where(conditions)
        {
            return {
                [this.key]: queryResults.slice((page - 1) * perPage,page * perPage),
                meta:{
                    page,
                    perPage,
                    totalPages: Math.ceil(queryResults.length/perPage)
                }
            }
        }
    }
}
export default Pagination