import { jwtSecret } from "../env/environment";

const jwtConfig = {
  secret: jwtSecret,
  expiresIn: "1h",
}

export default jwtConfig