export interface Cat {
  name: string;
  subscriptionActive: boolean;
  breed: string;
  //this is a temporary fix, add strict pouchsize type later please!
  pouchSize: string;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  cats: Cat[]
}