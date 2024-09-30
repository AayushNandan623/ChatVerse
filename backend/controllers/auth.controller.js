export const signup = (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
  } catch (error) {
    console.log(error);
  }
};

export const login = (req, res) => {
  console.log("signup");
};

export const logout = (req, res) => {
  console.log("signup");
};
