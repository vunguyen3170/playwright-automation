export class ElementNotClickableError extends Error {
  constructor(locator: string) {
      super(`Element with locator "${locator}" is not clickable.`);
      this.name = 'ElementNotClickableError';
  }
}