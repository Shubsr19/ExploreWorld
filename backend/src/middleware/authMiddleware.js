import jwt from 'jsonwebtoken';
const isAuthenticated = (req, res, next) => {
  const token = req.cookies?.accessToken || req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ success: false, message: 'Unauthorized - No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.id = decoded.id;
    req.role = decoded.role;
    next();
  } catch (error) {
    console.error("JWT error occurred:", error.message);
    return res.status(401).json({ success: false, message: 'Unauthorized - Invalid token' });
  }
};
const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken || req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized - No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.id = decoded.id;
    req.role = decoded.role;


    // Continue to the next middleware or route handler
    next();
  } catch (error) {
    console.error({ message: "JWT error occured" });
    return res.status(401).json({ message: 'Unauthorized - Invalid token' });
  }
};

const verifyUser = (req, res, next) => {
  const userId = req.id;
  const paramsId = req.params.id
  const role = req.role;

  if (paramsId === userId || role === 'admin') {
    next()
  } else {
    res.status(401).json({ success: false, message: "You're not Authorized" })
  }
}

const verifyAdmin = (req, res, next) => {
  const role = req.role;
  if (role === 'admin') {
    next()
  } else {
    res.status(401).json({ success: false, message: "You're not Authorized" })
  }
}

const isAdmin = (req, res, next) => {
  if (req.role === 'admin') {
    next();
  } else {
    return res.status(403).json({ success: false, message: "You're not authorized" });
  }
};


export {isAuthenticated, verifyAdmin, verifyToken, verifyUser ,isAdmin};

