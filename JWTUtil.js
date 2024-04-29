import jwt from 'jsonwebtoken';

const constantes = {
  JWT: {
    SECRET_KEY: process.env.PRIVATE_KEY,
    PUBLIC_KEY: process.env.PUBLIC_KEY,
    EXPIRES: '1h', // Tokens expiram em 1 hora
    ALGORITHM: 'RS256'
  }
};

class JWTUtil {
  constructor() {
    this.privateKey = `-----BEGIN PRIVATE KEY-----MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCxO47f4y+J3zC2tLksmMHWbJA8QNVkvGdB9zWJf1/WWTuRFmAmo4gr+XDtBdn1q+e5I3LPBNegLMY5GXuVaPatjjcOqJyidaFumU9kQezfJ3vWdaO9rHYd+eM/KR/kfyzlqxSlZzGmxSkCzSGlLAI7hpl72XWCI6NocDTdkwx6zgHEvtPry9Q7eloFIHKDIfDlhJXGHQQ7x2NvVk03TTYs1t/xp9mGKClhabN7P8xEx9CI3eaAuD68ZKB2f08Y2vsY3Z83TLOr3SFBlJkKJRpwEmEQ1g2m7DOGCfn8r1ODRyjyWl7Q2BeuVyQL3C08BLwNlj1t0+b3N1VDuP2A3W2ZAgMBAAECggEAKtmQeJbv9nCM0Y+uOZcRPmtvD/JI5Zsbh/ph6kVugV9/pFt5kb31/VPItrW0dc5DLyLf7idojqRkpIeBtqTzBxEcRKIFhM3V4uyUIlRCFc3xBe/ZT9FzmVnCVJH30QHidADB9B+YBI8klDXOTaXvQD8RurzfyUAekPCYB343BTWD9PL0fuBOyburQUuFHMltEaFySeRhm9HL+HP2WV8WwWdTLkJxSmJuMwNM9FOD0EKZAPyRqsWGUydIw8/vf5NFsfQ2Jc3o7QQnQlcxOhY7mcCbEAu7YqnC0JbD99VyzZBJjy4YicZsnFXPx17HYgUstzVZwdL5k/hSZjqE5nN0EQKBgQDr3t9x8LFibinVLPFUMlFK4cZsmW01xJw0N9HCK6jSWT5eGEnhNctilE+4965ZRe01eShJfjTPatbvYaVJIUA7ZT+oJisWF+K5WF1P1yQ/pH8yrINgc8Dvbjyw4QuB7ixw0uVfHAARCZPLcgNGAoOP21f60O4dka445ke4iUvznQKBgQDAW5tGnU0+/TYSJmKeam45ryvZRm3tpPMf7cOre3yUB5YKv/3D44lgEiV3ZMhMXnIFM0K63I8EexDeKBUu9tUqmwtkPHpyy/mwyPn2eS4IiNhdzPz5tfQh2gayY+rdYGJa8NGYravEW3hk6MdtBR27yghYsi4YxkQqPAxajXqXLQKBgA113pKGBdl0J/b+ZZdEd9cqI0S3TMAwxClGtjW6gBvg8+oywKSViVHK3PHVUKHPl8XhcCchiKn9kt5+WAxgVWYOVR+nbfYIzut823Ze9LadEJU3uxeaA3ymcdg2P43epbKalnRjCK3wOfr2OrGYGyHuhorNuYj+c07T9WvWifsRAoGBAIHa1Z37/vOw2Fm0VAsBalvCp2VMKFWvbvl09wzClj0QSfgD1/nvlwOl/Gj3Pkhf0bU0/61Jy7qIocB3aqWDuC/E7xHByh/JF0yCwEvlTnAwgXABPB4O+ToJB1BSJ3E+6ebef4AEbdpmrYXhpw8vzvzAzJWj436SCd5BH03aCJIZAoGBALGZSMAoEQr95Dqcxlqzlou0NVR/5zbIbs0eI1j+0KoU1zfpKIXlmeCmUq6oa5PfqCtqEIUqF2AlXCBYk3SYiDxQIj2p7b1ehjBqEcZ4pkei8+elSd1DcQt7i3Nxm8j1ChRuh7Y0dSeS00w0wEA1Y8Ktp1L68DxmrtF6EPHrB97D-----END PRIVATE KEY-----`;
    this.publicKey = `-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsTuO3+Mvid8wtrS5LJjB1myQPEDVZLxnQfc1iX9f1lk7kRZgJqOIK/lw7QXZ9avnuSNyzwTXoCzGORl7lWj2rY43DqiconWhbplPZEHs3yd71nWjvax2HfnjPykf5H8s5asUpWcxpsUpAs0hpSwCO4aZe9l1giOjaHA03ZMMes4BxL7T68vUO3paBSBygyHw5YSVxh0EO8djb1ZNN002LNbf8afZhigpYWmzez/MRMfQiN3mgLg+vGSgdn9PGNr7GN2fN0yzq90hQZSZCiUacBJhENYNpuwzhgn5/K9Tg0co8lpe0NgXrlckC9wtPAS8DZY9bdPm9zdVQ7j9gN1tmQIDAQAB-----END PUBLIC KEY-----`;
  }

  sign(payload) {
    try {
      return jwt.sign(payload, this.privateKey, {
        algorithm: constantes.JWT.ALGORITHM,
        expiresIn: constantes.JWT.EXPIRES
      });
    } catch (error) {
      throw error;
    }
  }

  verify(access_token) {
    try {
      return jwt.verify(access_token, this.publicKey, {
        algorithms: [constantes.JWT.ALGORITHM]
      });
    } catch (error) {
      throw error;
    }
  }
}

export default new JWTUtil();
