declare namespace Express {
  export interface Request {
    user: {
      id: string;
      username: string | null;
      name: string | null;
      createdAt: Date;
    };
  }
}
