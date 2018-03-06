const c = {};

c.taxes = {};
c.taxes.sale = 10.0;
c.taxes.import = 5.0;

c.exemptions = [
  'book',
  'chocolate',
  'headache pills',
];

c.import = {};
c.import.keyword = 'imported';

export default c;
