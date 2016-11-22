/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _app = __webpack_require__(1);

	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_app2.default.set('port', process.env.PORT || 3000).listen(_app2.default.get('port'), function () {
	    return console.log('Moon Highway website running on port \':' + _app2.default.get('port') + '\'');
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _express = __webpack_require__(2);

	var _express2 = _interopRequireDefault(_express);

	var _morgan = __webpack_require__(3);

	var _morgan2 = _interopRequireDefault(_morgan);

	var _bodyParser = __webpack_require__(4);

	var _bodyParser2 = _interopRequireDefault(_bodyParser);

	var _cookieParser = __webpack_require__(5);

	var _cookieParser2 = _interopRequireDefault(_cookieParser);

	var _lib = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _express2.default)().use(_lib.icon).use((0, _morgan2.default)('dev')).use(_bodyParser2.default.json()).use(_bodyParser2.default.urlencoded({ extended: false })).use((0, _cookieParser2.default)()).use(_lib.fileAssets).post('/contact/send', _lib.sendContactMail).get('/', _lib.success).use(_lib.notFound).use(_lib.error);

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("morgan");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("cookie-parser");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.error = exports.notFound = exports.success = exports.sendContactMail = exports.fileAssets = exports.icon = undefined;

	var _express = __webpack_require__(2);

	var _express2 = _interopRequireDefault(_express);

	var _serveFavicon = __webpack_require__(7);

	var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

	var _fs = __webpack_require__(8);

	var _fs2 = _interopRequireDefault(_fs);

	var _gmailSend = __webpack_require__(9);

	var _gmailSend2 = _interopRequireDefault(_gmailSend);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var htmlIndex = _fs2.default.readFileSync('client/index.html');

	var icon = exports.icon = (0, _serveFavicon2.default)('client/favicon.ico');

	var fileAssets = exports.fileAssets = _express2.default.static('client');

	//
	//  TODO: Change Response Screen on Client, success / error
	//

	//
	//  TODO: Respond to Sender, capture sender email errors
	//
	//     Maybe Record
	//
	//        * Create Copy for Response Email
	//        * Design Response Email
	//        * Incorporate and Test Response Email
	//

	var sendMail = function sendMail(obj) {
	    var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (f) {
	        return f;
	    };
	    return cb(new Error('SMTP Server error'));
	};

	if (process.env.emailFrom && process.env.emailTo && process.env.emailPassword) {
	    sendMail = (0, _gmailSend2.default)({
	        user: process.env.emailFrom,
	        pass: process.env.emailPassword,
	        to: process.env.emailTo,
	        subject: 'new website contact'
	    });
	    console.log('SMTP initialized. Emails will be sent from ' + process.env.emailFrom + ' to ' + process.env.emailTo);
	} else {
	    console.log('SMTP NOT INITIALIZED!!! Contact Us is currently not working');
	}

	var draftAdminEmail = function draftAdminEmail(_ref) {
	    var email = _ref.email,
	        subjects = _ref.subjects,
	        message = _ref.message;
	    return ('\n<pre>' + message + '</pre>\n<h2>Contact Us Message</h2>\n<h3>From: <a href="mailto:' + email + '">' + email + '</a></h3>\n<h3>Subjects: ' + subjects + '</h3>\n').trim();
	};

	var sendContactMail = exports.sendContactMail = function sendContactMail(req, res) {
	    return sendMail({ html: draftAdminEmail(req.body) }, function (err, response) {
	        return err ? res.json({ success: false, err: err }) : res.json({ success: true, response: response });
	    });
	};

	var success = exports.success = function success(req, res) {
	    return res.status(200).send(htmlIndex);
	};

	var notFound = exports.notFound = function notFound(req, res, next) {
	    var err = new Error('Content Not Found');
	    err.status = 404;
	    next(err);
	};

	var error = exports.error = function error(_error, req, res, next) {
	    return res.status(_error.status || 500).json(_error);
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("serve-favicon");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("gmail-send");

/***/ }
/******/ ]);