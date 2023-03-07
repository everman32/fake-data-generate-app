import { faker } from "@faker-js/faker";

const getNewPerson = () => {
  return {
    uuid: faker.datatype.uuid(),
    name: faker.name.findName(),
    address: [
      faker.address.state(),
      faker.address.cityName(),
      faker.address.streetAddress(),
      faker.address.secondaryAddress(),
    ].join(", "),
    phone: faker.phone.phoneNumber(),
  };
};

const generateData = (numItems) => {
  return Array.from({ length: numItems }, () => ({ ...getNewPerson() }));
};

export default generateData;
