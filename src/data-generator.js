const { faker } = require("@faker-js/faker");

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
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

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map((d) => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}