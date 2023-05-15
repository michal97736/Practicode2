

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
//rnd_sS41XQwghPonKfXcJFCwFlV8EgiCconst

const sdk = require('api')('@render-api/v1.0#dnrc1ulf088q9j');

sdk.auth('rnd_sS41XQwghPonKfXcJFCwFlV8EgiC');
sdk.getServices({limit: '20'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));
