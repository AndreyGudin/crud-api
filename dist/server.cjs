/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/dotenv/lib/main.js":
/*!*****************************************!*\
  !*** ./node_modules/dotenv/lib/main.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const fs = __webpack_require__(/*! fs */ \"fs\")\nconst path = __webpack_require__(/*! path */ \"path\")\nconst os = __webpack_require__(/*! os */ \"os\")\nconst packageJson = __webpack_require__(/*! ../package.json */ \"./node_modules/dotenv/package.json\")\n\nconst version = packageJson.version\n\nconst LINE = /(?:^|^)\\s*(?:export\\s+)?([\\w.-]+)(?:\\s*=\\s*?|:\\s+?)(\\s*'(?:\\\\'|[^'])*'|\\s*\"(?:\\\\\"|[^\"])*\"|\\s*`(?:\\\\`|[^`])*`|[^#\\r\\n]+)?\\s*(?:#.*)?(?:$|$)/mg\n\n// Parser src into an Object\nfunction parse (src) {\n  const obj = {}\n\n  // Convert buffer to string\n  let lines = src.toString()\n\n  // Convert line breaks to same format\n  lines = lines.replace(/\\r\\n?/mg, '\\n')\n\n  let match\n  while ((match = LINE.exec(lines)) != null) {\n    const key = match[1]\n\n    // Default undefined or null to empty string\n    let value = (match[2] || '')\n\n    // Remove whitespace\n    value = value.trim()\n\n    // Check if double quoted\n    const maybeQuote = value[0]\n\n    // Remove surrounding quotes\n    value = value.replace(/^(['\"`])([\\s\\S]*)\\1$/mg, '$2')\n\n    // Expand newlines if double quoted\n    if (maybeQuote === '\"') {\n      value = value.replace(/\\\\n/g, '\\n')\n      value = value.replace(/\\\\r/g, '\\r')\n    }\n\n    // Add to object\n    obj[key] = value\n  }\n\n  return obj\n}\n\nfunction _log (message) {\n  console.log(`[dotenv@${version}][DEBUG] ${message}`)\n}\n\nfunction _resolveHome (envPath) {\n  return envPath[0] === '~' ? path.join(os.homedir(), envPath.slice(1)) : envPath\n}\n\n// Populates process.env from .env file\nfunction config (options) {\n  let dotenvPath = path.resolve(process.cwd(), '.env')\n  let encoding = 'utf8'\n  const debug = Boolean(options && options.debug)\n  const override = Boolean(options && options.override)\n\n  if (options) {\n    if (options.path != null) {\n      dotenvPath = _resolveHome(options.path)\n    }\n    if (options.encoding != null) {\n      encoding = options.encoding\n    }\n  }\n\n  try {\n    // Specifying an encoding returns a string instead of a buffer\n    const parsed = DotenvModule.parse(fs.readFileSync(dotenvPath, { encoding }))\n\n    Object.keys(parsed).forEach(function (key) {\n      if (!Object.prototype.hasOwnProperty.call(process.env, key)) {\n        process.env[key] = parsed[key]\n      } else {\n        if (override === true) {\n          process.env[key] = parsed[key]\n        }\n\n        if (debug) {\n          if (override === true) {\n            _log(`\"${key}\" is already defined in \\`process.env\\` and WAS overwritten`)\n          } else {\n            _log(`\"${key}\" is already defined in \\`process.env\\` and was NOT overwritten`)\n          }\n        }\n      }\n    })\n\n    return { parsed }\n  } catch (e) {\n    if (debug) {\n      _log(`Failed to load ${dotenvPath} ${e.message}`)\n    }\n\n    return { error: e }\n  }\n}\n\nconst DotenvModule = {\n  config,\n  parse\n}\n\nmodule.exports.config = DotenvModule.config\nmodule.exports.parse = DotenvModule.parse\nmodule.exports = DotenvModule\n\n\n//# sourceURL=webpack://crud-api/./node_modules/dotenv/lib/main.js?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var node_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node:http */ \"node:http\");\n/* harmony import */ var node_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_http__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var node_cluster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node:cluster */ \"node:cluster\");\n/* harmony import */ var node_cluster__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_cluster__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var node_os__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node:os */ \"node:os\");\n/* harmony import */ var node_os__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_os__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dotenv */ \"./node_modules/dotenv/lib/main.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-node/v4.js\");\n/* harmony import */ var _routes_deleteReq__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/deleteReq */ \"./src/routes/deleteReq.ts\");\n/* harmony import */ var _routes_getReq__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/getReq */ \"./src/routes/getReq.ts\");\n/* harmony import */ var _routes_postReq__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/postReq */ \"./src/routes/postReq.ts\");\n/* harmony import */ var _routes_putReq__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/putReq */ \"./src/routes/putReq.ts\");\n/* harmony import */ var _utils_bodyParser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/bodyParser */ \"./src/utils/bodyParser.ts\");\n/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./server */ \"./src/server.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n/* eslint-disable @typescript-eslint/no-unused-vars */\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\ndotenv__WEBPACK_IMPORTED_MODULE_3__.config({ path: './src/.env' });\r\nconst id = (0,uuid__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\r\nlet users = [];\r\nconst { PORT } = process.env;\r\nconst { MODE_ENV } = process.env;\r\nconst { pid } = process;\r\nif (MODE_ENV === 'single') {\r\n    const server = (0,_server__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(users);\r\n    server.listen(PORT, () => {\r\n        console.log(`Server started om port : ${PORT}`);\r\n    });\r\n}\r\nelse {\r\n    const numberOfCPUs = (0,node_os__WEBPACK_IMPORTED_MODULE_2__.cpus)().length;\r\n    if ((node_cluster__WEBPACK_IMPORTED_MODULE_1___default().isPrimary)) {\r\n        let u = [];\r\n        for (let i = 0; i < numberOfCPUs; i += 1) {\r\n            const server = node_cluster__WEBPACK_IMPORTED_MODULE_1___default().fork({ portChild: i });\r\n            server.on('message', (message) => {\r\n                const arr = message.users;\r\n                u = [...arr];\r\n            });\r\n        }\r\n        const balancer = (0,node_http__WEBPACK_IMPORTED_MODULE_0__.createServer)((req, res) => { });\r\n        let count = 1;\r\n        balancer.on('request', (request, response) => __awaiter(void 0, void 0, void 0, function* () {\r\n            try {\r\n                const serverHostName = 'localhost';\r\n                const portForRequest = +PORT + count;\r\n                const options = {\r\n                    hostname: serverHostName,\r\n                    port: portForRequest,\r\n                    path: request.url,\r\n                    method: request.method,\r\n                    headers: { 'Content-Type': 'application/json' },\r\n                };\r\n                const requestToServers = (0,node_http__WEBPACK_IMPORTED_MODULE_0__.request)(options, (responseFromServer) => __awaiter(void 0, void 0, void 0, function* () {\r\n                    response.statusCode = responseFromServer.statusCode;\r\n                    response.setHeader('Content-Type', responseFromServer.headers['content-type']);\r\n                    const body = yield (0,_utils_bodyParser__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(responseFromServer);\r\n                    response.write(JSON.stringify(body));\r\n                    response.end();\r\n                }));\r\n                if ((request.method === 'POST') || (request.method === 'PUT')) {\r\n                    const body = yield (0,_utils_bodyParser__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(request);\r\n                    requestToServers.write(JSON.stringify(body));\r\n                }\r\n                requestToServers.end();\r\n                count += 1;\r\n                if (count > numberOfCPUs)\r\n                    count = 1;\r\n                const ids = Object.keys((node_cluster__WEBPACK_IMPORTED_MODULE_1___default().workers));\r\n                ids.forEach((idW) => { var _a; return (_a = (node_cluster__WEBPACK_IMPORTED_MODULE_1___default().workers)[idW]) === null || _a === void 0 ? void 0 : _a.send({ users: u }); });\r\n            }\r\n            catch (error) {\r\n                response.writeHead(500, { 'Content-Type': 'application/json' });\r\n                response.end(JSON.stringify({ title: 'Server Error', message: 'Error on server side' }));\r\n            }\r\n        }));\r\n        balancer.listen(PORT, () => {\r\n            console.log(`Balancer started om port : ${balancer.address().port}, pid: ${pid}`);\r\n        });\r\n    }\r\n    else {\r\n        const { portChild } = process.env;\r\n        const server = (0,node_http__WEBPACK_IMPORTED_MODULE_0__.createServer)((req, res) => {\r\n            try {\r\n                switch (req.method) {\r\n                    case 'GET':\r\n                        (0,_routes_getReq__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(req, res, users);\r\n                        break;\r\n                    case 'POST':\r\n                        (0,_routes_postReq__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(req, res, users);\r\n                        break;\r\n                    case 'PUT':\r\n                        (0,_routes_putReq__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(req, res, users);\r\n                        break;\r\n                    case 'DELETE':\r\n                        (0,_routes_deleteReq__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(req, res, users);\r\n                        break;\r\n                    default:\r\n                        res.statusCode = 404;\r\n                        res.setHeader('Content-Type', 'application/json');\r\n                        res.write(JSON.stringify({\r\n                            title: 'Not Found',\r\n                            message: 'Route does not exist',\r\n                        }));\r\n                        res.end();\r\n                }\r\n                res.on('finish', () => {\r\n                    process === null || process === void 0 ? void 0 : process.send({ users });\r\n                });\r\n            }\r\n            catch (error) {\r\n                res.writeHead(500, { 'Content-Type': 'application/json' });\r\n                res.end(JSON.stringify({ title: 'Server Error', message: 'Error on server side' }));\r\n            }\r\n        });\r\n        process === null || process === void 0 ? void 0 : process.on('message', (mess) => {\r\n            const arr = mess.users;\r\n            users = [...arr];\r\n        });\r\n        const serverPort = +PORT + +portChild + 1;\r\n        server.listen(serverPort, () => {\r\n            console.log(`Server started om port : ${server.address().port}, pid: ${pid}`);\r\n        });\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://crud-api/./src/index.ts?");

/***/ }),

/***/ "./src/routes/deleteReq.ts":
/*!*********************************!*\
  !*** ./src/routes/deleteReq.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ deleteReq)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-node/validate.js\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\nfunction deleteReq(req, res, users) {\r\n    var _a, _b;\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const baseUrl = (_a = req.url) === null || _a === void 0 ? void 0 : _a.substring(0, req.url.lastIndexOf('/') + 1);\r\n        const id = (_b = req.url) === null || _b === void 0 ? void 0 : _b.split('/')[3];\r\n        if ((id) && (!(0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id)) && (baseUrl === '/api/users/')) {\r\n            res.writeHead(400, { 'Content-Type': 'application/json' });\r\n            res.end(JSON.stringify({ title: 'Validation failed', message: 'UUID is not valid' }));\r\n        }\r\n        else if ((id) && ((0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id)) && (baseUrl === '/api/users/')) {\r\n            res.setHeader('Content-Type', 'application/json');\r\n            const user = users.findIndex((u) => u.id === id);\r\n            if (user >= 0) {\r\n                users.splice(user, 1);\r\n                res.statusCode = 204;\r\n                res.write(JSON.stringify({ title: 'Deleted', message: 'User has been deleted' }));\r\n                res.end();\r\n            }\r\n            else {\r\n                res.statusCode = 404;\r\n                res.write(JSON.stringify({ title: 'Not Found', message: 'User does not exist' }));\r\n                res.end();\r\n            }\r\n        }\r\n        else {\r\n            res.writeHead(404, { 'Content-Type': 'application/json' });\r\n            res.end(JSON.stringify({ title: 'Not Found', message: 'Route does not exist' }));\r\n        }\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://crud-api/./src/routes/deleteReq.ts?");

/***/ }),

/***/ "./src/routes/getReq.ts":
/*!******************************!*\
  !*** ./src/routes/getReq.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getReq)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-node/validate.js\");\n\r\nconst { pid } = process;\r\nfunction getReq(req, res, users) {\r\n    var _a, _b;\r\n    const baseUrl = (_a = req.url) === null || _a === void 0 ? void 0 : _a.substring(0, req.url.lastIndexOf('/') + 1);\r\n    const id = (_b = req.url) === null || _b === void 0 ? void 0 : _b.split('/')[3];\r\n    if (req.url === '/api/users/') {\r\n        res.statusCode = 200;\r\n        res.setHeader('Content-Type', 'application/json');\r\n        res.write(JSON.stringify(users));\r\n        res.end();\r\n    }\r\n    else if ((id) && (!(0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id))) {\r\n        res.writeHead(400, { 'Content-Type': 'application/json' });\r\n        res.end(JSON.stringify({ title: 'Validation failed', message: 'UUID is not valid' }));\r\n    }\r\n    else if ((id) && ((0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id)) && (baseUrl === '/api/users/')) {\r\n        res.setHeader('Content-Type', 'application/json');\r\n        const user = users.filter((u) => u.id === id);\r\n        if (user.length > 0) {\r\n            res.statusCode = 200;\r\n            res.write(JSON.stringify(user));\r\n            res.end();\r\n        }\r\n        else {\r\n            res.statusCode = 404;\r\n            res.write(JSON.stringify({ title: 'Not Found', message: 'User does not exist' }));\r\n            res.end();\r\n        }\r\n    }\r\n    else {\r\n        res.writeHead(404, { 'Content-Type': 'application/json' });\r\n        res.end(JSON.stringify({ title: 'Not Found', message: 'Route does not exist' }));\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://crud-api/./src/routes/getReq.ts?");

/***/ }),

/***/ "./src/routes/postReq.ts":
/*!*******************************!*\
  !*** ./src/routes/postReq.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ postReq)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-node/v4.js\");\n/* harmony import */ var _utils_bodyParser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/bodyParser */ \"./src/utils/bodyParser.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\n\r\nconst { pid } = process;\r\nfunction postReq(req, res, users) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        if (req.url === '/api/users/') {\r\n            try {\r\n                const body = yield (0,_utils_bodyParser__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(req);\r\n                const id = (0,uuid__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n                if (('username' in body) && ('age' in body) && ('hobbies' in body)) {\r\n                    users.push(Object.assign(Object.assign({}, body), { id }));\r\n                    res.statusCode = 201;\r\n                    res.setHeader('Content-Type', 'application/json');\r\n                    res.write(JSON.stringify(Object.assign(Object.assign({}, body), { id })));\r\n                    res.end();\r\n                }\r\n                else {\r\n                    res.writeHead(400, { 'Content-Type': 'application/json' });\r\n                    res.end(JSON.stringify({ title: 'Validation is failed', message: 'Request body is not valid' }));\r\n                }\r\n            }\r\n            catch (error) {\r\n                res.writeHead(400, { 'Content-Type': 'application/json' });\r\n                res.end(JSON.stringify({ title: 'Validation is failed', message: 'Request body is not valid' }));\r\n            }\r\n        }\r\n        else {\r\n            res.writeHead(404, { 'Content-Type': 'application/json' });\r\n            res.end(JSON.stringify({ title: 'Not Found', message: 'Route does not exist' }));\r\n        }\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://crud-api/./src/routes/postReq.ts?");

/***/ }),

/***/ "./src/routes/putReq.ts":
/*!******************************!*\
  !*** ./src/routes/putReq.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getReq)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-node/validate.js\");\n/* harmony import */ var _utils_bodyParser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/bodyParser */ \"./src/utils/bodyParser.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\n\r\nfunction getReq(req, res, users) {\r\n    var _a, _b;\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const baseUrl = (_a = req.url) === null || _a === void 0 ? void 0 : _a.substring(0, req.url.lastIndexOf('/') + 1);\r\n        const id = (_b = req.url) === null || _b === void 0 ? void 0 : _b.split('/')[3];\r\n        if ((id) && (!(0,uuid__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(id)) && (baseUrl === '/api/users/')) {\r\n            res.writeHead(400, { 'Content-Type': 'application/json' });\r\n            res.end(JSON.stringify({ title: 'Validation failed', message: 'UUID is not valid' }));\r\n        }\r\n        else if ((id) && ((0,uuid__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(id)) && (baseUrl === '/api/users/')) {\r\n            res.setHeader('Content-Type', 'application/json');\r\n            const user = users.findIndex((u) => u.id === id);\r\n            const body = yield (0,_utils_bodyParser__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(req);\r\n            if (user >= 0) {\r\n                res.statusCode = 200;\r\n                users[user] = Object.assign(Object.assign({}, body), { id });\r\n                res.write(JSON.stringify(users[user]));\r\n                res.end();\r\n            }\r\n            else {\r\n                res.statusCode = 404;\r\n                res.write(JSON.stringify({ title: 'Not Found', message: 'User does not exist' }));\r\n                res.end();\r\n            }\r\n        }\r\n        else {\r\n            res.writeHead(404, { 'Content-Type': 'application/json' });\r\n            res.end(JSON.stringify({ title: 'Not Found', message: 'Route does not exist' }));\r\n        }\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://crud-api/./src/routes/putReq.ts?");

/***/ }),

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createSingleServer)\n/* harmony export */ });\n/* harmony import */ var node_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node:http */ \"node:http\");\n/* harmony import */ var node_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_http__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _routes_deleteReq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes/deleteReq */ \"./src/routes/deleteReq.ts\");\n/* harmony import */ var _routes_getReq__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/getReq */ \"./src/routes/getReq.ts\");\n/* harmony import */ var _routes_postReq__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/postReq */ \"./src/routes/postReq.ts\");\n/* harmony import */ var _routes_putReq__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/putReq */ \"./src/routes/putReq.ts\");\n\r\n\r\n\r\n\r\n\r\nfunction createSingleServer(users) {\r\n    const server = (0,node_http__WEBPACK_IMPORTED_MODULE_0__.createServer)((req, res) => {\r\n        try {\r\n            res.statusCode = 200;\r\n            switch (req.method) {\r\n                case 'GET':\r\n                    (0,_routes_getReq__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(req, res, users);\r\n                    break;\r\n                case 'POST':\r\n                    (0,_routes_postReq__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(req, res, users);\r\n                    break;\r\n                case 'PUT':\r\n                    (0,_routes_putReq__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(req, res, users);\r\n                    break;\r\n                case 'DELETE':\r\n                    (0,_routes_deleteReq__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(req, res, users);\r\n                    break;\r\n                default:\r\n                    res.statusCode = 404;\r\n                    res.setHeader('Content-Type', 'application/json');\r\n                    res.write(JSON.stringify({\r\n                        title: 'Not Found',\r\n                        message: 'Route does not exist',\r\n                    }));\r\n                    res.end();\r\n            }\r\n        }\r\n        catch (error) {\r\n            res.writeHead(500, { 'Content-Type': 'application/json' });\r\n            res.end(JSON.stringify({ title: 'Server Error', message: 'Error on server side' }));\r\n        }\r\n    });\r\n    return server;\r\n}\r\n\n\n//# sourceURL=webpack://crud-api/./src/server.ts?");

/***/ }),

/***/ "./src/utils/bodyParser.ts":
/*!*********************************!*\
  !*** ./src/utils/bodyParser.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ bodyParser)\n/* harmony export */ });\nfunction bodyParser(req) {\r\n    return new Promise((resolve, reject) => {\r\n        try {\r\n            let body = '';\r\n            req.on('data', (chunk) => {\r\n                body += chunk;\r\n            });\r\n            req.on('end', () => {\r\n                const temp = {\r\n                    username: 'Temp',\r\n                    age: 23,\r\n                    hobbies: ['temp', 'temp'],\r\n                };\r\n                if (body)\r\n                    resolve(JSON.parse(body));\r\n                else\r\n                    resolve(temp);\r\n            });\r\n        }\r\n        catch (error) {\r\n            console.log(error);\r\n            reject(error);\r\n        }\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://crud-api/./src/utils/bodyParser.ts?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/native.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/native.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  randomUUID: (crypto__WEBPACK_IMPORTED_MODULE_0___default().randomUUID)\n});\n\n//# sourceURL=webpack://crud-api/./node_modules/uuid/dist/esm-node/native.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/regex.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/regex.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack://crud-api/./node_modules/uuid/dist/esm-node/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/rng.js":
/*!************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/rng.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);\n\nconst rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate\n\nlet poolPtr = rnds8Pool.length;\nfunction rng() {\n  if (poolPtr > rnds8Pool.length - 16) {\n    crypto__WEBPACK_IMPORTED_MODULE_0___default().randomFillSync(rnds8Pool);\n    poolPtr = 0;\n  }\n\n  return rnds8Pool.slice(poolPtr, poolPtr += 16);\n}\n\n//# sourceURL=webpack://crud-api/./node_modules/uuid/dist/esm-node/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/stringify.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/stringify.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"unsafeStringify\": () => (/* binding */ unsafeStringify)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-node/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nconst byteToHex = [];\n\nfor (let i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).slice(1));\n}\n\nfunction unsafeStringify(arr, offset = 0) {\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();\n}\n\nfunction stringify(arr, offset = 0) {\n  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n\n  return uuid;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack://crud-api/./node_modules/uuid/dist/esm-node/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/v4.js":
/*!***********************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/v4.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ \"./node_modules/uuid/dist/esm-node/native.js\");\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-node/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-node/stringify.js\");\n\n\n\n\nfunction v4(options, buf, offset) {\n  if (_native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID && !buf && !options) {\n    return _native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID();\n  }\n\n  options = options || {};\n  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n\n    for (let i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n\n    return buf;\n  }\n\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack://crud-api/./node_modules/uuid/dist/esm-node/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/validate.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/validate.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-node/regex.js\");\n\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].test(uuid);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://crud-api/./node_modules/uuid/dist/esm-node/validate.js?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "node:cluster":
/*!*******************************!*\
  !*** external "node:cluster" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:cluster");

/***/ }),

/***/ "node:http":
/*!****************************!*\
  !*** external "node:http" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:http");

/***/ }),

/***/ "node:os":
/*!**************************!*\
  !*** external "node:os" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:os");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "./node_modules/dotenv/package.json":
/*!******************************************!*\
  !*** ./node_modules/dotenv/package.json ***!
  \******************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"name\":\"dotenv\",\"version\":\"16.0.3\",\"description\":\"Loads environment variables from .env file\",\"main\":\"lib/main.js\",\"types\":\"lib/main.d.ts\",\"exports\":{\".\":{\"require\":\"./lib/main.js\",\"types\":\"./lib/main.d.ts\",\"default\":\"./lib/main.js\"},\"./config\":\"./config.js\",\"./config.js\":\"./config.js\",\"./lib/env-options\":\"./lib/env-options.js\",\"./lib/env-options.js\":\"./lib/env-options.js\",\"./lib/cli-options\":\"./lib/cli-options.js\",\"./lib/cli-options.js\":\"./lib/cli-options.js\",\"./package.json\":\"./package.json\"},\"scripts\":{\"dts-check\":\"tsc --project tests/types/tsconfig.json\",\"lint\":\"standard\",\"lint-readme\":\"standard-markdown\",\"pretest\":\"npm run lint && npm run dts-check\",\"test\":\"tap tests/*.js --100 -Rspec\",\"prerelease\":\"npm test\",\"release\":\"standard-version\"},\"repository\":{\"type\":\"git\",\"url\":\"git://github.com/motdotla/dotenv.git\"},\"keywords\":[\"dotenv\",\"env\",\".env\",\"environment\",\"variables\",\"config\",\"settings\"],\"readmeFilename\":\"README.md\",\"license\":\"BSD-2-Clause\",\"devDependencies\":{\"@types/node\":\"^17.0.9\",\"decache\":\"^4.6.1\",\"dtslint\":\"^3.7.0\",\"sinon\":\"^12.0.1\",\"standard\":\"^16.0.4\",\"standard-markdown\":\"^7.1.0\",\"standard-version\":\"^9.3.2\",\"tap\":\"^15.1.6\",\"tar\":\"^6.1.11\",\"typescript\":\"^4.5.4\"},\"engines\":{\"node\":\">=12\"}}');\n\n//# sourceURL=webpack://crud-api/./node_modules/dotenv/package.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;