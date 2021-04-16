export interface UserConstructor {
  id: number;
  name: string;
  email: string;
  signupDate: string;
}

class User {
  private _id: number;
  private _name: string;
  private _email: string;
  private _signupDate: string;

  constructor({ id, name, email, signupDate }: UserConstructor) {
    this._id = id;
    this._name = name;
    this._email = email;
    this._signupDate = signupDate;
  }

  get id() { return this._id; }
  get name() { return this._name; }
  get email() { return this._email; }
  get signupDate() { return this._signupDate; }
}

export default User;
