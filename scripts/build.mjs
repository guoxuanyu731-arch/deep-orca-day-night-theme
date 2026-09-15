import { access } from 'node:fs/promises';

const required = [
  'package.json',
  'cordis.patch.yml',
  'skin.json',
  'lib/index.js',
  'lib/client.js'
];

await Promise.all(required.map((path) => access(new URL(`../${path}`, import.meta.url))));
console.log('Deep Orca runtime files are present.');
