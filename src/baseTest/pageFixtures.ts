import { Page } from "@playwright/test";
import { Logger } from "winston";

interface FixtureType {
    page: Page;
    logger: Logger;
}

export const fixture: Partial<FixtureType> = {
    page: null,
    logger: null
};
