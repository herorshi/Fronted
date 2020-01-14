import db from "../db";
import Finder from './finder'
import Paginate from './pagination'
const Model = {
  ...Finder,
  ...Paginate,
  findAll() {
    // return db.users;
    // console.log(this, "this");
    return this.collection();
  },
  find(id) {
    return this.findRecord(id);
  },
  create(attrs) {
    //  console.log(attrs,'attrs');
    const collection = this.collection();
    const record = this.withPermmitedAttrs(attrs, {
      id: collection.length + 1
    });
    //  console.log(record,'record');
    this.setCollection([...collection, record]);
    return record;
  },
  update(id, attrs) {
    const collection = this.collection();
    const index = this.findIndex(id);
    const updateRecord = this.withPermmitedAttrs(attrs, collection[index]);
    this.setCollection([
      ...collection.slice(0, index),
      updateRecord,
      ...collection.slice(index + 1)
    ]);
    return updateRecord;
  },
  destroy(id) {
    const collection = this.collection();
    const index = this.findIndex(id);
    this.setCollection([
      ...collection.slice(0, index),
      ...collection.slice(index + 1)
    ]);
  },
  collection() {
    return db[this.key];
  },
  findRecord(id) {
    return this.collection().find(record => record.id === +id);
  },
  findIndex(id) {
    return this.collection().findIndex(record => record.id === +id);
  },
  withPermmitedAttrs(attrs, init = {}) {
    //  console.log(attrs,'attrs');
    //  console.log(init,'init');
    return this.permittedAttrs.reduce((record, attr) => {
    //   console.log(init,'init');
    //   console.log(record, "record");
    //   console.log(attrs, "attrs");
    //   console.log(attr, "attr");
    //   console.log([attr],'email');
    //   console.log(attrs[attr],'result');

      return attrs[attr] ? { ...record, [attr]: attrs[attr] } : record;
    }, init);
  },
  setCollection(collection) {
    db[this.key] = collection;
  }
};

export default Model;
