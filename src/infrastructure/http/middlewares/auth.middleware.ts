import { Request, Response, NextFunction } from 'express';

export function authMiddleware (
  req: Request,
  res: Response,
  next: NextFunction 
) {

    const key = req.headers["stop-api-key"];

    if (!key) {

        res.status(401).json({ error: "API key não fornecida" });
    
        return

    }


    if (key !== process.env.API_KEY) {
        
        res.status(403).json({ error: "API key inválida" });
    
        return

    }

    next();

}