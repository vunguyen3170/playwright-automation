// import * as dotenv from 'dotenv';

// export const getEnv = () => {
//   const env = process.env.ENV;
  
//   if (env) {
//     dotenv.config({
//       override: true,
//       path: `src/envConfig/.env.${env}`
//     });
//   } else {
//     console.error("NO ENV PASSED!");
//   }
// }

import * as dotenv from 'dotenv';

export const getEnv = () => {
  const env = process.env.ENV;

  if (!env) {
    console.error("ERROR: No ENV specified. Please set the ENV environment variable.");
    return; 
  }

  const envPath = `src/envConfig/.env.${env}`;

  try {
    dotenv.config({
      override: true,
      path: envPath
    });
    console.log(`Loaded configuration from ${envPath}`);
  } catch (error) {
    console.error(`ERROR: Failed to load configuration from ${envPath}.`, error);
  }
}
