import { BrowserType } from '../enumuration/browserTypes';

export class UnsupportedBrowserTypeError extends Error {
  constructor(browserTypeKey: string) {
      const supportedTypes = Object.values(BrowserType).join(', ');
      super(`Unsupported browser type: ${browserTypeKey}. Supported types are: ${supportedTypes}`);
  }
}