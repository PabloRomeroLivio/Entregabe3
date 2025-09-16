import { faker } from '@faker-js/faker';

const generateMockPet = () => {
  return {
    name: faker.animal.cat(), 
    specie: faker.animal.type(), 
    birthDate: faker.date.birthdate().toISOString(),
  };
};

/**
 
 * @param {number} count 
 * @returns {Array<Object>}
 */
export const generateMockPets = (count) => {
  const pets = [];
  for (let i = 0; i < count; i++) {
    pets.push(generateMockPet());
  }
  return pets;
};
