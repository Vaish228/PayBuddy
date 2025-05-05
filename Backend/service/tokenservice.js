const jwt = require('jsonwebtoken');


class tokenService {
    secret = process.env.JWT_SECRET_KEY;
    expireIn = process.env.JWT_EXPIRY;

    genToken(payload = {}, expiry) {
        const token = jwt.sign(payload, this.secret,
            {
                expiresIn: expiry || this.expireIn
            }
        );
        return token;
    }
    verifyToken(token) {
        try {
            const decoded = jwt.verify(token, this.secret);
            return decoded;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
}

const token = new tokenService();
module.exports = token;