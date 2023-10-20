"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api";
exports.ids = ["pages/api"];
exports.modules = {

/***/ "./pages/api/index.js":
/*!****************************!*\
  !*** ./pages/api/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst axios = __webpack_require__(/*! axios */ \"axios\");\nfunction handler(req, res, next) {\n    async function getURI(url) {\n        try {\n            const response = await axios.get(url);\n            if (response.status !== 200) {\n                return res.status(response.status).json({\n                    type: 'error',\n                    message: response.statusText\n                });\n            } else {\n                res.json(JSON.stringify(response.data));\n            }\n        } catch (error) {\n            console.log(error.message, \"ERR\");\n        // return res.status(500).json({ type: 'error', message: error.message });\n        }\n    }\n    res.setHeader('Access-Control-Allow-Origin', '*');\n    res.setHeader('Content-Type', 'application/json');\n    getURI(JSON.parse(req.body)['my-url']);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLEtBQUssQ0FBQ0EsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLG9CQUFPO0FBRWQsUUFBUSxDQUFDQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxJQUFJLEVBQUUsQ0FBQzttQkFDaENDLE1BQU0sQ0FBQ0MsR0FBRyxFQUFFLENBQUM7UUFDMUIsR0FBRyxDQUFDLENBQUM7WUFDSCxLQUFLLENBQUNDLFFBQVEsR0FBRyxLQUFLLENBQUNSLEtBQUssQ0FBQ1MsR0FBRyxDQUFDRixHQUFHO1lBQ3BDLEVBQUUsRUFBRUMsUUFBUSxDQUFDRSxNQUFNLEtBQUssR0FBRyxFQUFFLENBQUM7Z0JBQzVCLE1BQU0sQ0FBQ04sR0FBRyxDQUFDTSxNQUFNLENBQUNGLFFBQVEsQ0FBQ0UsTUFBTSxFQUFFQyxJQUFJLENBQUMsQ0FBQztvQkFBQ0MsSUFBSSxFQUFFLENBQU87b0JBQUVDLE9BQU8sRUFBRUwsUUFBUSxDQUFDTSxVQUFVO2dCQUFDLENBQUM7WUFDekYsQ0FBQyxNQUFNLENBQUM7Z0JBQ1JWLEdBQUcsQ0FBQ08sSUFBSSxDQUFDSSxJQUFJLENBQUNDLFNBQVMsQ0FBQ1IsUUFBUSxDQUFDUyxJQUFJO1lBQ3JDLENBQUM7UUFDSCxDQUFDLENBQUMsS0FBSyxFQUFFQyxLQUFLLEVBQUUsQ0FBQztZQUNmQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDTCxPQUFPLEVBQUUsQ0FBSztRQUNoQyxFQUEwRTtRQUM1RSxDQUFDO0lBQ0gsQ0FBQztJQUNEVCxHQUFHLENBQUNpQixTQUFTLENBQUMsQ0FBNkIsOEJBQUUsQ0FBRztJQUNoRGpCLEdBQUcsQ0FBQ2lCLFNBQVMsQ0FBQyxDQUFjLGVBQUUsQ0FBa0I7SUFDaERmLE1BQU0sQ0FBQ1MsSUFBSSxDQUFDTyxLQUFLLENBQUNuQixHQUFHLENBQUNvQixJQUFJLEVBQUUsQ0FBUTtBQUN0QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29ycy1wcm94eS8uL3BhZ2VzL2FwaS9pbmRleC5qcz9jNWZmIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcywgbmV4dCkge1xuICBhc3luYyBmdW5jdGlvbiBnZXRVUkkodXJsKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMocmVzcG9uc2Uuc3RhdHVzKS5qc29uKHsgdHlwZTogJ2Vycm9yJywgbWVzc2FnZTogcmVzcG9uc2Uuc3RhdHVzVGV4dCB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICByZXMuanNvbihKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhKSlcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSwgXCJFUlJcIilcbiAgICAgIC8vIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IHR5cGU6ICdlcnJvcicsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfSk7XG4gICAgfVxuICB9IFxuICByZXMuc2V0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpO1xuICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICBnZXRVUkkoSlNPTi5wYXJzZShyZXEuYm9keSlbJ215LXVybCddKVxufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwicmVxdWlyZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJuZXh0IiwiZ2V0VVJJIiwidXJsIiwicmVzcG9uc2UiLCJnZXQiLCJzdGF0dXMiLCJqc29uIiwidHlwZSIsIm1lc3NhZ2UiLCJzdGF0dXNUZXh0IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzZXRIZWFkZXIiLCJwYXJzZSIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/index.js"));
module.exports = __webpack_exports__;

})();