import jwt from 'jsonwebtoken';
export const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1]; // Получаем токен из заголовка
    if (!token) {
        res.status(401).json({ message: 'Access denied, no token provided' });
        return;
    }
    try {
        // console.log("Token received for verification:", token);
        // Проверка токена
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified; // Добавляем данные пользователя в запрос
        // console.log("Token verified successfully:", verified);
        next(); // Переход к следующему middleware
    }
    catch (error) {
        console.error("Token verification failed");
        res.status(401).json({ message: 'Invalid token' }); // Возвращаем 401 при невалидном токене
        return;
    }
};
