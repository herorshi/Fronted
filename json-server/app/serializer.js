const Serializer = {
    for(method,resource){
        return this[method](resource) //เป็นการเรียกใช้ function get
    }
}

export default Serializer 