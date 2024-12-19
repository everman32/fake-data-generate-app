import { faker } from "@faker-js/faker";

const getNewPerson = () => {
  return {
    uuid: faker.string.uuid(),
    name: faker.person.fullName(),
    address: [
      faker.location.state(),
      faker.location.city(),
      faker.location.streetAddress(),
      faker.location.secondaryAddress(),
    ].join(", "),
    phone: faker.phone.number(),
  };
};

const generateData = (numItems) => {
  return Array.from({ length: numItems }, () => ({ ...getNewPerson() }));
};

export default generateData;
