/* eslint-disable no-fallthrough */
/* eslint-disable security/detect-object-injection */
const Events = require('events');
const util = require('util');

const logSymbols = {
  debug: 'D',
  notice: 'N',
  info: 'I',
  warn: 'W',
  error: 'E',
};

class Logger extends Events {
  constructor() {
    super();

    this.options = {
      logLevel: process.env.LOG_LEVEL,
      logTime: !!process.env.LOG_TIME,
    };

    this._setupListeners();
  }

  _setupListeners() {
    if (typeof this.options.logLevel !== 'string') return;

    switch (this.options.logLevel.toLowerCase()) {
      case 'debug':
        this.on('log debug', context => this.log('debug', context));
      case 'notice':
        this.on('log notice', context => this.log('notice', context));
      case 'info':
        this.on('log info', context => this.log('info', context));
      case 'warn':
        this.on('log warn', context => this.log('warn', context));
      case 'error':
        this.on('log error', context => this.log('error', context));
        break;
    }
  }

  // Listener

  log(logLevel, context) {
    const ts = this.options.logTime ? context.ts.toISOString() + ' ' : '';
    const level = logSymbols[logLevel];
    const msg = util.format(...context.data);

    return process.stderr.write(`${ts}${level} ${msg}\n`);
  }

  // Emitters

  debug(...data) {
    this.emit('log debug', { data, ts: new Date() });
  }

  notice(...data) {
    this.emit('log notice', { data, ts: new Date() });
  }

  info(...data) {
    this.emit('log info', { data, ts: new Date() });
  }

  warn(...data) {
    this.emit('log warn', { data, ts: new Date() });
  }

  error(...data) {
    this.emit('log error', { data, ts: new Date() });
  }
}

module.exports = new Logger();
