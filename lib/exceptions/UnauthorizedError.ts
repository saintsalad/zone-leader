export class UnauthorizedError extends Error {
  status: number;

  constructor(message = "You are not authorized to access this resource") {
    super(message);
    this.name = "UnauthorizedError";
    this.status = 401;
  }
}
