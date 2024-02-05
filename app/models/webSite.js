import slugify from "slugify";
import validator from "validator";


class Website {
  #title;
  #description;
  #address;
  #device;
  #level;

  constructor(config) {
    this.title = config.title;
    this.description = config.description;
    this.address = config.address;
    this.device = config.device;
    this.level = config.level;
  }

  get title() {
    return this.#title;
  }

  get description() {
    return this.#description;
  }

  get address() {
    return this.#address;
  }

  get device() {
    return this.#device;
  }

  get level() {
    return this.#level;
  }

  get slug() {
    return slugify(this.#title, {
      lower: true,
      strict: true,
    });
  }

  set title(value) {  
    if (typeof value !== 'string' || value.trim().length === 0) {  
      throw new Error('Titre obligatoire');   
    }
    this.#title = value.trim(); 
  }

  set description(value) {
    if (typeof value !== 'string' && typeof value !== 'undefined') {
      throw new Error('La présentation est une chaîne de caractères obligatoire qui doit faire entre 10 et 500 caractères.');
    }
    this.#description = value?.trim();
  }

  set address(value) {
    if (!validator.isURL(value)) {
      throw new Error('adresse obligatoire');
    }
    this.#address = value;
  }

  set device(value) {
    const allowedValues = ['Mobile', 'Ordinateur', "Lecteur d'écran"];
    if (typeof value !== 'undefined' && !allowedValues.includes(value)) {
      throw new Error('Appareil incorrect');
    }
    this.#device = value;
  }

  set level(value) {
    const allowedValues = ['Bloquant', 'Gênant', 'Casse tête'];
    if (typeof value !== 'undefined' && !allowedValues.includes(value)) {
      throw new Error('Niveau incorrect');
    }
    this.#level = value;
  }

}

export default Website; 