var crypto = require('crypto');

// 加密后的密码后附加字符串再加密
// str：原始密码；salt：一串字符串；
function sha1WithSalt(str, salt) {
    return sha1(sha1(str) + salt);
}

// 对密码str进行加密
function sha1(str) {
    var sha1 = crypto.createHash('sha1'); // create a sha1 crypto
    sha1.update(str); // add str into sha1 buffer.
    return sha1.digest('hex'); // conver sha1 result to hex string
}

module.exports = sha1WithSalt;
