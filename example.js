const log = require('./src');

log.debug('Debug message');
log.notice('Notice message %o', { test: 'object' });
log.info(false);
log.warn([1, 2, 3]);
log.error(new Error('Error test'));
