import { faker } from '@faker-js/faker';

/**
 * Genera una mascota falsa usando faker
 * - name: nombre de animal
 * - species: tipo de animal (coincide con el modelo)
 * - birthDate: fecha de nacimiento en formato ISO
 */
const generateMockPet = () => {
  return {
    name: faker.animal.cat(), // podés usar también dog(), horse(), etc.
    specie: faker.animal.type(), // <-- corregido a species
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
