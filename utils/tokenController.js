import * as jose from "jose";
import { expireIn, secretKey } from "@/config/config";
import { HttpStatus } from "@/config/httpStatusCodes";

export const generateToken = async (objData) => {
  try {
    // Create a TextEncoder for the secret key
    const secret = new TextEncoder().encode(secretKey || "your-secret-key");

    // Create the JWT token
    const authToken = await new jose.SignJWT(objData)
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime(expireIn || "2h")
      .sign(secret);

    return authToken;
  } catch (err) {
    let error = new Error(err.message);
    error.statusCode = 400;
    throw error;
  }
};

export const decodeToken = (token) => {
  try {
    // Decode the token without verification (for client-side use)
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  } catch (err) {
    console.error("Error decoding token:", err);
    return null;
  }
};

export const verifyToken = async (token) => {
  try {
    const secret = new TextEncoder().encode(secretKey || "your-secret-key");
    const { payload } = await jose.jwtVerify(token, secret);

    console.log("verifyTokenResponse : ", payload);
    return payload;
  } catch (err) {
    return 400;
  }
};

export const verifyAuthToken = async (req, res, next) => {
  try {
    let { token } = req.headers;
    if (token) {
      let response = await verifyToken(token);
      if (response === 400) {
        return res.status(HttpStatus.UNAUTHORIZED_401).json({ message: "Not allowed" });
      } else {
        res.locals.sauthenticated = response.id ? true : false;
        res.locals.id = response.id;
        res.locals.fullname = response.fullname;
        res.locals.email = response.email;
        res.locals.role = response.role ?? "student";
        res.locals.active = response.active;
        res.locals.access = response.access;
        return res.status(HttpStatus.SUCCESS_200).json({ token: response });
      }
    } else {
      res.status(HttpStatus.UNAUTHORIZED_401).json({ message: "Not allowed" });
    }
  } catch (error) {
    console.log("error : ", error);
    return res.status(HttpStatus.BAD_REQUEST_400).json(error);
  }
};
