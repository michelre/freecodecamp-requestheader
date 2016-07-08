'use strict';

module.exports = {
  parseLanguage: (langHeaders) => langHeaders.split(',')[0],
  parseUserAgent: (header) => /\(([^\)]+)\)/g.exec(header)[1],
  parseIpAddress: (header) => /((?:[0-9]{1,3}\.){3}[0-9]{1,3})/.exec(header)[1],
};