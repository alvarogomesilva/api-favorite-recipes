export class User {
    constructor(
      public readonly id_user: string,
      public name: string,
      public email: string,
      public password: string,

      public created_at: Date,
      public updated_at: Date
    ) {}
  }