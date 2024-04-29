import JWTUtil from './JWTUtil';

// Simulação de payload
const payload = {
  user_id: '123456',
  name: 'Example User',
  email: 'user@example.com'
};

// Assinar o token
const token = JWTUtil.sign(payload);
console.log('Token gerado:', token);

// Verificar o token
try {
  const decoded = JWTUtil.verify(token);
  console.log('Dados decodificados:', decoded);
} catch (error) {
  console.error('Erro ao verificar o token:', error);
}
