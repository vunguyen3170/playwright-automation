import { BeforeAll, AfterAll, Before, After, Status } from "@cucumber/cucumber";
import { Browser, BrowserContext } from "@playwright/test";
import { fixture } from "./pageFixtures";
import { invokeBrowser } from "../utilities/browserUtils";
import { getEnv } from "../envConfig/env";
import { createLogger } from "winston";
import { options } from "../reuseableComponent/logger/logger";
import { DEFAULT_TIMEOUT_IN_MILISECONDS } from '../constants/frameworkConstants'
import { readFileAsBuffer } from "../utilities/fileUtils";

let browser: Browser;
let context: BrowserContext;

BeforeAll(async function () {
    getEnv();
    browser = await invokeBrowser();
});

Before(async function ({ pickle }) {
    const scenarioName = pickle.name + pickle.id;
    context = await browser.newContext({
        // recordVideo: {
        //     dir: "test-results/videos",
        // },
    });
    const page = await context.newPage();
    page.setDefaultTimeout(DEFAULT_TIMEOUT_IN_MILISECONDS);
    fixture.page = page;
    fixture.logger = createLogger(options(scenarioName));
});


After(async function ({ pickle, result }) {
    let videoPath: string;
    let img: Buffer;
    if (result?.status == Status.PASSED) {
        img = await fixture.page.screenshot({ path: `./test-results/screenshots/${pickle.name}.png`, type: "png" });
        // videoPath = await fixture.page.video().path();
    }
    await fixture.page.close();
    await context.close();
    if (result?.status == Status.PASSED) {
        this.attach(img, "image/png");
        // this.attach(readFileAsBuffer(videoPath), 'video/webm');
    }
});

AfterAll(async function () {
    await browser.close();
});
