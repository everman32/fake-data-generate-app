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

const generateData = (...length) => {
  const generateDataLevel = (depth = 0) => {
    return [...Array(length[depth]).keys()].map(() => {
      return {
        ...getNewPerson(),
        subRows: length[depth + 1] ? generateDataLevel(depth + 1) : undefined,
      };
    });
  };

  return generateDataLevel();
};

export default generateData;
