'use strict';

var exec = require('cordova/exec');

var WEBSERVER_CLASS = 'Webserver';
var START_FUNCTION = 'start';
var ONREQUEST_FUNCTION = 'onRequest';
var SENDRESPONSE_FUNCTION = 'sendResponse';
var STOP_FUNCTION = 'stop';
var PUSHFRAME_FUNCTION = 'pushFrame';

function start(success_callback, error_callback, port) {
  var params = [];
  if (port) {
    params.push(port);
  }
  exec(success_callback, error_callback, WEBSERVER_CLASS, START_FUNCTION, params);
}

function onRequest(success_callback) {
  exec(success_callback, function (error) {
    console.error(error);
  }, WEBSERVER_CLASS, ONREQUEST_FUNCTION, []);
}

function sendResponse(requestId, params, success_callback, error_callback) {
  exec(success_callback, error_callback, WEBSERVER_CLASS, SENDRESPONSE_FUNCTION, [requestId, params]);
}

function stop(success_callback, error_callback) {
  exec(success_callback, error_callback, WEBSERVER_CLASS, STOP_FUNCTION, []);
}

function pushFrame(base64Jpeg, success_callback, error_callback) {
  exec(success_callback, error_callback, WEBSERVER_CLASS, PUSHFRAME_FUNCTION, [base64Jpeg]);
}

module.exports = {
  start: start,
  onRequest: onRequest,
  sendResponse: sendResponse,
  stop: stop,
  pushFrame: pushFrame
};
