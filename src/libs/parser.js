import conf from '../conf';

class Parser {
  constructor() {
    this.regex = /^(\d{1,3})\s([\w\s]+)\sat\s(\d{1,4}\.\d{2})$/gm;
  }

  parse(data) {
    const results = [];
    let match = this.regex.exec(data);
    while (match != null) {
      if (match.length === 4) {
        const [_, rawQuantity, rawName, rawPrice] = match;
        const quantity = parseInt(rawQuantity, 10);
        const price = parseFloat(rawPrice);
        const imported = rawName.includes(conf.import.keyword);
        // the 'imported' word is removed from the name and used
        // in the product class as a property
        const name = rawName
          .replace(conf.import.keyword, '')
          .replace(/  +/g, ' ')
          .trim();
        results.push({
          quantity, name, price, imported,
        });
      }
      match = this.regex.exec(data);
    }
    return results;
  }
}

export default Parser;
