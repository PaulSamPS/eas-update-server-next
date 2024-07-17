import ExpoConfig from '@expo/config';
import * as path from 'path';

const projectDir = path.join(__dirname, '..', '..', 'eas-test-app');

const { exp } = ExpoConfig.getConfig(projectDir, {
  skipSDKVersionRequirement: true,
  isPublicConfig: true,
});

console.log(JSON.stringify(exp));
//
// import ExpoConfig from '@expo/config';
// import * as path from 'path';
// import * as fs from 'fs';
//
// // Get current date in format YYYY-MM-DD
// const currentDate = new Date().toISOString().split('T')[0];
// const projectDir = path.join(__dirname, '..', '..', 'eas-test-app');
//
// const { exp } = ExpoConfig.getConfig(projectDir, {
//   skipSDKVersionRequirement: true,
//   isPublicConfig: true,
// });
//
// const outputDir = path.join(__dirname, 'updates', currentDate);
// if (!fs.existsSync(outputDir)) {
//   fs.mkdirSync(outputDir, { recursive: true });
// }
//
// fs.writeFileSync(
//   path.join(outputDir, 'expoConfig.json'),
//   JSON.stringify(exp, null, 2),
// );
//
// console.log(`Config written to ${path.join(outputDir, 'expoConfig.json')}`);
