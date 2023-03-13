# fake-data-generate-app

![GitHub release (latest by date)](https://img.shields.io/github/v/release/everman32/fake-data-generate-app) [![GitHub stars](https://img.shields.io/github/stars/everman32/fake-data-generate-app)](https://github.com/everman32/fake-data-generate-app/stargazers) [![GitHub forks](https://img.shields.io/github/forks/everman32/fake-data-generate-app)](https://github.com/everman32/fake-data-generate-app/network) [![GitHub issues](https://img.shields.io/github/issues/everman32/fake-data-generate-app)](https://github.com/everman32/fake-data-generate-app/issues) [![GitHub license](https://img.shields.io/github/license/everman32/fake-data-generate-app)](https://github.com/everman32/fake-data-generate-app)

![logo](docs/logo.png)

Application for generating fake user data

## Installation
Use `npm` as a package manager. Install dependencies from `package.json`:
```bash
npm i
```

## Usage
To start the application, you must run `npm run start` or simply `npm start`:
```bash
npm start
```
As mentioned earlier, the application generates fake user data and puts it in a table view. The table view contains the following data:
* `UUID` is a universal unique identifier that distinguishes records from each other,
* `Name` is the full name of the person (it may have a different format, since the data is generated from different regions),
* `Address` is the full address of the person's residence,
* `Phone` is the person's phone number (mobile or landline).

*Note: Name, Address and Phone may be in different format as the data is generated from different regions.*

### Infinite scroll
As the page scrolls to the end, 20 additional table entries are generated.

### Data sorting
The data in the table can be sorted by clicking on the column names. Initially, the data is presented "as is", that is, without sorting. Clicking on a column name will sort in ascending order 🔼 according to that particular column. Clicking again will sort in descending order 🔽. If you click again, the data will be presented randomly.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)