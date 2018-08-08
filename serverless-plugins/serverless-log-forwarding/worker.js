'use strict';

let worker = {};

worker.handler = (event, context, callback) => {
  console.log(`event: `);
  console.log(JSON.stringify(event));
};

module.exports = worker;
