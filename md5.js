const MD5 = require("crypto-js/md5");
const xxc = MD5(MD5("admin")).toString();
console.log(xxc);
