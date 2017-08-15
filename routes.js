'use strict';

const Assets = require('./handlers/assets');
const Pages = require('./handlers/pages');

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: Pages.home
},
{
    method: 'GET',
    path: '/{param*}',
    handler: Assets.servePublicDirectory
}
];
