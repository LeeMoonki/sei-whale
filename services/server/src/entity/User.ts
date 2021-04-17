class User {
  private readonly _id: number;
  private readonly _name: string;
  private readonly _email: string;
  private readonly _password?: string;
  private readonly _signupDate: string;

  constructor({
    id,
    name,
    email,
    password,
    signupDate,
  }: {
    id: number;
    name: string;
    email: string;
    password?: string;
    signupDate: string;
  }) {
    this._id = id;
    this._name = name;
    this._email = email;
    this._password = password;
    this._signupDate = signupDate;
  }

  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get email() {
    return this._email;
  }
  get signupDate() {
    return this._signupDate;
  }
  get password() {
    return this._password;
  }
}

export default User;
