import jwt, { JwtPayload } from 'jsonwebtoken'

export function verifyToken(token: string | undefined, secret: string) {
  if (!token) return null;
  try {
    return jwt.verify(token, secret) as JwtPayload;
  } catch {
    return null;
  }
}