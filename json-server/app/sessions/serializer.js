import Serializer from "../serializer";
const Userserializer = {
  // for(method,resource){
  //     return this[method](resource) //เป็นการเรียกใช้ function get
  // },
  ...Serializer,
  get(user) {
   return this.serialize(user)
    // return { id, email, isAdmin };
  },
  getAll(users){
    return users.map(user=>{ return this.serialize(user) })
  },
  create(users){
    //  return users;
    return this.serialize(users)
  },
  serialize(user){
      const { id,email,isAdmin} = user
      return  { id,email,isAdmin }
  }
};

export default Userserializer;
