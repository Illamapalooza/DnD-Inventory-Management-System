const checkRole = (roles) => (req, res, next) => {
 const userRole = req.decoded.Role;
 if (roles.includes(userRole)) {
  next();
 } else {
  res.status(403).json({ error: 'Access denied' });
 }
};

export default checkRole;
