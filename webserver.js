'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = start;
exports.onRequest = onRequest;
exports.sendResponse = sendResponse;
exports.stop = stop;
exports.pushFrame = pushFrame;

var _exec = require('cordova/exec');

var _exec2 = _interopRequireDefault(_exec);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WEBSERVER_CLASS = 'Webserver';
var START_FUNCTION = 'start';
var ONREQUEST_FUNCTION = 'onRequest';
var SENDRESPONSE_FUNCION = 'sendResponse';
var STOP_FUNCTION = 'stop';
var PUSHFRAME_FUNCTION = 'pushFrame';

function start(success_callback, error_callback, port) {
  var params = [];
  if (port) {
    params.push(port);
  }
  (0, _exec2.default)(success_callback, error_callback, WEBSERVER_CLASS, START_FUNCTION, PUSHFRAME_FUNCTION, params);
}

function onRequest(success_callback) {
  (0, _exec2.default)(success_callback, function (error) {
    console.error(error);
  }, WEBSERVER_CLASS, ONREQUEST_FUNCTION, []);
}

function sendResponse(requestId, params, success_callback, error_callback) {
  (0, _exec2.default)(success_callback, error_callback, WEBSERVER_CLASS, SENDRESPONSE_FUNCION, [requestId, params]);
}

function stop(success_callback, error_callback) {
  (0, _exec2.default)(success_callback, error_callback, WEBSERVER_CLASS, STOP_FUNCTION, []);
}

function pushFrame(base64Jpeg) {
  var success = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
  var error = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

  (0, _exec2.default)(success, error, WEBSERVER_CLASS, PUSHFRAME_FUNCTION, [base64Jpeg]);
}
