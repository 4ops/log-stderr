# log-stderr

[![Build Status](https://travis-ci.org/4ops/log-stderr.svg?branch=master)](https://travis-ci.org/4ops/log-stderr)
[![install size](https://packagephobia.now.sh/badge?p=log-stderr)](https://packagephobia.now.sh/result?p=log-stderr)

Simple Node.js logger without dependencies. Prints formatted messages to `stderr`.

## Installation

Using `npm`:

```shell
$ npm install --save log-stderr
```

Using `yarn`:

```shell
$ yarn add log-stderr
```

## Configuration

Via environment variables:

- `LOG_LEVEL` - minimum logging level. Can be on of values: `debug`, `notice`, `info`, `warn` or `error`.

  Logger is silent by default.

- `LOG_TIME` - if has any non-empty value, prints timestamp in ISO format:

  ```
  2019-08-25T14:59:04.792Z D Debug message
  ```

  When variable has no value:

  ```
  D Debug message
  ```

## Usage

```javascript
const log = require('log-stderr');

log.debug('Debug message');
log.notice('Notice message %o', { test: 'object' });
log.info(false);
log.warn([1, 2, 3]);
log.error(new Error('Error test'));
```

Example output:

```
D Debug message
N Notice message { test: 'object' }
I false
W [ 1, 2, 3 ]
E Error: Error test
    at Object.<anonymous> (.../log-stderr/test.js:7:11)
    at Module._compile (internal/modules/cjs/loader.js:868:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:879:10)
    at Module.load (internal/modules/cjs/loader.js:731:32)
    at Function.Module._load (internal/modules/cjs/loader.js:644:12)
    at Function.Module.runMain (internal/modules/cjs/loader.js:931:10)
    at internal/main/run_main_module.js:17:11
```
