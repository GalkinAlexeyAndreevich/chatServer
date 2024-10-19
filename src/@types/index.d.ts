import { JwtPayload } from 'jsonwebtoken';

declare global {
  namespace Express {
    interface Request {
      user?: string | JwtPayload; // Определите тип данных пользователя (в зависимости от того, что возвращает jwt.verify)
    }
  }
}