export class Contact {
  #name = "";
  #surname = "";
  #email = "";
  #isConnected = false;

  constructor(name, surname, email, isConnected) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.isConnected = isConnected;
  }

  set name(name) {
    if (typeof name === "string") this.#name = name;
  }

  set surname(surname) {
    if (typeof surname === "string") this.#surname = surname;
  }

  set email(email) {
    if (typeof email === "string") this.#email = email;
  }

  set isConnected(isConnected) {
    if (typeof isConnected === "boolean") this.#isConnected = isConnected;
  }

  get name() {
    return this.#name;
  }

  get surname() {
    return this.#surname;
  }

  get email() {
    return this.#email;
  }

  get isConnected() {
    return this.#isConnected;
  }
}
