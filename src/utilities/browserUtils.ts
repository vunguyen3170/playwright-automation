import { LaunchOptions, chromium, firefox, webkit, Browser } from "playwright-core";
import { BrowserType } from '../enumuration/browserTypes';
import { UnsupportedBrowserTypeError } from '../errorHandling/unsupportedBrowserTypeError'; 

const options: LaunchOptions = {
  headless: false,
};

const browserTypes: Record<BrowserType, typeof chromium | typeof firefox | typeof webkit> = {
  [BrowserType.CHROMIUM]: chromium,
  [BrowserType.FIREFOX]: firefox,
  [BrowserType.WEBKIT]: webkit,
};

export const invokeBrowser = async (): Promise<Browser> => {
  const browserTypeKey = (process.env.npm_config_BROWSER || BrowserType.CHROMIUM).toUpperCase();
  const browserType = browserTypes[BrowserType[browserTypeKey as keyof typeof BrowserType]];

  if (browserType) {
    return await browserType.launch(options);
  }

  throw new UnsupportedBrowserTypeError(browserTypeKey);
};
