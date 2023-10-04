// document the code

// @desc    Auth user & get token
// @route   POST /api/users/login
// Path: backend/controllers/userController.js\
const authUser = (req, res) => {
  res.status(200).json({ message: "Auth user" });
};

export { authUser };
