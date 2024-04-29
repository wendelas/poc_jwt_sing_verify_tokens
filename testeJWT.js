import jwt from 'jsonwebtoken';
import fs from 'fs';

// Simulação de constantes e variáveis de ambiente para teste
const constantes = {
  JWT: {
    EXPIRES: '1h',  // Tempo de expiração do token
    ALGORITHM: 'RS256'
  }
};

// Lendo as chaves do sistema de arquivos para o exemplo (substitua pelo uso de variáveis de ambiente em produção)
//const privateKey = fs.readFileSync('./private_key_pkcs8.pem', 'utf8');
//const publicKey = fs.readFileSync('./public_key.pem', 'utf8');
const privateKey = `-----BEGIN PRIVATE KEY-----
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
VLModMipCQqLl2mBOxNW0sg0TQh1yQ==
-----END PRIVATE KEY-----`;
const publicKey = `-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAzCwiIQqaIOBlTKgWIoyc
5pbqnvtG2Iy/hPAHD/7ATtBJorh33neRgM3//xhL1UcUis6Hv1OqnYM3+2FhyDdq
ZK2u4W+pV8tSHCNJfgqjyIKGjwcqEQAhJ2f04cAh8dAdjcaLEHju8Ns8c/XvHy1+
2ZUF+blZmMTUMGyIUtEwjrebn+KFUekXPOsawcFp7ZJzourXw/YSv/rqaPF8BeUq
qq3AgVdOhosVbKk0Di5NVxs6FMnOuFzv8ghiXUzZ74ra9oSLxWnbAKn6VWer6j5T
b+gjnaf4SaNW8y356r68Kttq5nTkz2jA5+Ga2VP4HbH1EKROywfZVIrThtxKMWcr
6FbuoCct44oSO2ViqeT6NuFi1ZktxpHRzewRwebml1jgvWnm4n6SpNW4ggyhSwO0
X52mxD5j6C6DGs7Mf7VFAc40ubgGpVWJWP93UWxlDjGB7wJ1XmUTtODNmmsHT6Ur
kE6S1C8xg6TKGtjtDSrnaAeJIEJ2VWfUq8ReHp4x08l48BH7ZubTvBaFujxRJ5QS
+nrCon9UR3nc946BYNoP4HuCpBSR0mfL/oIyWSA7EIlGyp2o/IvQLHvZdtQBbfpN
phRJL0kVpLOxeLXv49/wvIATKSQlJCOpgYK1qrBGz6KlFL9nlvYaVABMzQ/lJBmv
Qo/oU1b0v90xwbg69jgleisCAwEAAQ==
-----END PUBLIC KEY-----`;


class JWTUtil {
  constructor(privateKey, publicKey) {
    this.privateKey = privateKey;
    this.publicKey = publicKey;
  }

  sign(payload) {
    return jwt.sign(payload, this.privateKey, {
      algorithm: constantes.JWT.ALGORITHM,
      expiresIn: constantes.JWT.EXPIRES
    });
  }

  verify(token) {
    return jwt.verify(token, this.publicKey, {
      algorithms: [constantes.JWT.ALGORITHM]
    });
  }
}

// Instância da utilidade JWT
const jwtUtil = new JWTUtil(privateKey, publicKey);

// Simulação de payload
const payload = {
  userId: 1,
  username: 'wendelas',
  email: 'wendelas@gmail.comm'
};

// Assinar o token
const token = jwtUtil.sign(payload);
console.log('Token gerado:', token);

// Verificar o token
try {
  const decoded = jwtUtil.verify(token);
  console.log('Token verificado e decodificado:', decoded);
} catch (error) {
  console.error('Erro ao verificar o token:', error);
}
