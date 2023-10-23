require("dotenv").config();
const UserModel = require("../model/user.model");
class AuthController {
  async login(req, res) {
    try {
      const { username, password } = req.body;
      const user = await UserModel.find({ username });
      if (!user || user.password !== password) {
        return res
          .status(400)
          .json({ msg: "Email hoặc mật khẩu không hợp lệ" });
      }
      const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });
      res.status(200).json({ token, username: user.username });
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}
module.exports = new AuthController();
