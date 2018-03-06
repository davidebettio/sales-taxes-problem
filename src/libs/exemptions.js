import conf from '../conf';

class Exemptions {
  constructor() {
    this.exemptedWords = conf.exemptions;
  }

  verify(name) {
    return this.exemptedWords.some(word => name.includes(word));
  }
}

export default Exemptions;
