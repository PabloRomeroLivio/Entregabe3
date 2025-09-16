import { faker } from '@faker-js/faker';
import bcrypt from 'bcryptjs';

/**
 * Genera un usuario falso con datos realistas usando faker
 * - password: "coder123" encriptada
 * - role: aleatorio entre "user" y "admin"
 * - pets: array vacío
 */
const generateMockUser = () => {
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync('coder123', salt);

  return {
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    email: faker.internet.email(),
    age: faker.number.int({ min: 18, max: 80 }),
    password: hashedPassword,
    role: faker.helpers.arrayElement(['user', 'admin']),
    pets: [],
  };
};

/**
 * Genera un array de usuarios falsos
 * @param {number} count - cantidad de usuarios a generar
 * @returns {Array<Object>}
 */
export const generateMockUsers = (count) => {
  const users = [];
  for (let i = 0; i < count; i++) {
    users.push(generateMockUser());
  }
  return users;
};
