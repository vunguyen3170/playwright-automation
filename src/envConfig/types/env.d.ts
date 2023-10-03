export {};

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            // Browser type for testing or automation
            BROWSER: "chrome" | "firefox" | "webkit",
            
            // Environment type
            ENV: "prod" | "staging" | "qa" | "dev",
            
            // Base URL for the service/app
            BASEURL: string,
            
            // Indicates whether to run the browser in headless mode
            HEADLESS: "true" | "false"
        }
    }
}
