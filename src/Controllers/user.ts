import type { NextFunction, Request, RequestHandler, Response } from "express";
import { userServices } from "../Services/index.js";
import multer from 'multer';
import jwt, { type JwtPayload } from 'jsonwebtoken';


export const getUsers = async (res:Response) => {
  let users = await userServices.getUsers();
  res.send(users);
};

export const addUser = async (req:Request, res:Response) => {
  console.log(req.body);
  let body = req.body;
  let post = await userServices.addUser(
    body.login_user,
    body.password_user
  );
  res.send(post);
};

export const getUser = async (req:Request, res:Response) => {
  let { id } = req.params;
  console.log("id пользователя перед проверкой", id);
  let user = await userServices.getUser(Number(id));
  res.send(user);
};
export const getUserOnLogin = async (req:Request, res:Response) => {
  console.log(req.body);
  let { login } = req.params;
  let user = await userServices.getUserOnLogin(login);
  res.send(user);
};


const refreshTokens: string[] = []; // Массив для хранения refresh токенов (в реальной системе нужно хранить в базе данных)

// Генерация JWT токена
export const generateAccessToken = (id: number) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30m' });
};

// Генерация Refresh токена
export const generateRefreshToken = (id: number) => {
  console.log("refresh token test");
  
  return jwt.sign({ id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
};
export const signIn = async (req: Request, res: Response) => {
  const { login, password } = req.body;

  userServices.signIn(login, password)
    .then(user => {
      if (!user) {
        return res.status(400).json({ message: 'User not found' });
      }

      // Генерация токенов
      const accessToken = generateAccessToken(user.id_user );
      const refreshToken = generateRefreshToken(user.id_user);

      // Сохранение refresh токена (в этом примере в массиве, в реальной системе — в базе данных)
      refreshTokens.push(refreshToken);

      return res.status(200).json({
        accessToken,
        refreshToken,
        userId: user.id_user
      });
    })
    .catch(err => {
      console.error(err);
      return res.status(500).json({ message: 'Internal Server Error' });
    });
};
interface JwtPayloadWithId extends JwtPayload {
  id: number; // Поле id, которое мы зашиваем в токен
}
export const verifyToken = (token: string, secret: string): Promise<JwtPayloadWithId> => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        return reject(err);
      }
      if (!decoded || typeof decoded !== 'object' || !('id' in decoded)) {
        return reject(new Error('Invalid token'));
      }
      resolve(decoded as JwtPayloadWithId);
    });
  });
};
export const refreshAccessToken = async (req: Request, res: Response) => {
  const { token } = req.body;

  if (!token) {
    res.status(401).json({ message: 'No refresh token provided' });
    return 
  }

  if (!refreshTokens.includes(token)) {
    res.status(403).json({ message: 'Invalid refresh token' });
    return 
  }

  try {
    const user = await verifyToken(token, process.env.REFRESH_TOKEN_SECRET);
    const accessToken = generateAccessToken(user.id);
    res.status(200).json({
      accessToken
    });
    return 
  } catch (error:unknown) {
    if (error instanceof Error) {
      res.status(403).json({ message: error.message });
      return 
    }
    res.status(500).json({ message: 'Internal Server Error' });
    return 
  }
};

const storage = multer.memoryStorage(); // Используем память для хранения загруженных файлов
const upload = multer({ storage });
export const updateImageOnUser: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  const userId = parseInt(req.params.userId); 
  const photoBuffer = req.file?.buffer;

  if (!photoBuffer) {
    res.status(400).json({ error: 'No photo uploaded' });
    return; 
  }

  try {
    await userServices.updateImageOnUser(userId, photoBuffer);
    res.status(200).json({ message: 'Image updated successfully' });
  } catch (error) {
    console.error(error); 
    res.status(500).json({ error: 'Failed to update image' }); 
  }
};

// Используем middleware upload.single в маршруте
export const uploadUserPhoto = upload.single('photo');

export const check = async (req:Request, res:Response) => {
  const token =  jwt.sign({ id: req.user }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return res.json({token})
};
