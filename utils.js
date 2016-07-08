'use strict';

module.exports = {
  parseLanguage: (langHeaders) => langHeaders.split(',')[0],
  parseUserAgent: (header) => /\(([^\)]+)\)/g.exec(header)[1]
};