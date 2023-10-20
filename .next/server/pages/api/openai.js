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
exports.id = "pages/api/openai";
exports.ids = ["pages/api/openai"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "./pages/api/openai.js":
/*!*****************************!*\
  !*** ./pages/api/openai.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"config\": () => (/* binding */ config)\n/* harmony export */ });\nconst OpenAIApi = __webpack_require__(/*! openai */ \"openai\");\nconst openai = new OpenAIApi({\n    key: process.env.OPENAI_API_KEY\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method !== 'POST') {\n        return res.status(405).end();\n    }\n    const { prompt , maxTokens  } = req.body;\n    if (!prompt) {\n        return res.status(400).json({\n            error: 'Prompt is required'\n        });\n    }\n    try {\n        const completionRequest = new CreateCompletionRequest({\n            model: \"davinci-003\",\n            prompt: prompt,\n            max_tokens: maxTokens || 150\n        });\n        const response = await openai.createCompletion(completionRequest);\n        return res.json(response.data);\n    } catch (error) {\n        return res.status(500).json({\n            error: 'Error interacting with OpenAI'\n        });\n    }\n});\n// Allow any CORS\nconst config = {\n    api: {\n        bodyParser: true,\n        externalResolver: true\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvb3BlbmFpLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsS0FBSyxDQUFDQSxTQUFTLEdBQUdDLG1CQUFPLENBQUMsc0JBQVE7QUFFbEMsS0FBSyxDQUFDQyxNQUFNLEdBQUcsR0FBRyxDQUFDRixTQUFTLENBQUMsQ0FBQztJQUM1QkcsR0FBRyxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsY0FBYztBQUNqQyxDQUFDO0FBRUQsaUVBQU0sT0FBZ0JDLEdBQUcsRUFBRUMsR0FBRyxHQUFLLENBQUM7SUFDbEMsRUFBRSxFQUFFRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxDQUFNLE9BQUUsQ0FBQztRQUMxQixNQUFNLENBQUNELEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsRUFBRUMsR0FBRztJQUM1QixDQUFDO0lBRUQsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsTUFBTSxHQUFFQyxTQUFTLEVBQUMsQ0FBQyxHQUFHTixHQUFHLENBQUNPLElBQUk7SUFFdEMsRUFBRSxHQUFHRixNQUFNLEVBQUUsQ0FBQztRQUNaLE1BQU0sQ0FBQ0osR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxFQUFFSyxJQUFJLENBQUMsQ0FBQztZQUFDQyxLQUFLLEVBQUUsQ0FBb0I7UUFBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxHQUFHLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQ0MsaUJBQWlCLEdBQUcsR0FBRyxDQUFDQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQ3JEQyxLQUFLLEVBQUUsQ0FBYTtZQUNwQlAsTUFBTSxFQUFFQSxNQUFNO1lBQ2RRLFVBQVUsRUFBRVAsU0FBUyxJQUFJLEdBQUc7UUFDOUIsQ0FBQztRQUVELEtBQUssQ0FBQ1EsUUFBUSxHQUFHLEtBQUssQ0FBQ25CLE1BQU0sQ0FBQ29CLGdCQUFnQixDQUFDTCxpQkFBaUI7UUFDaEUsTUFBTSxDQUFDVCxHQUFHLENBQUNPLElBQUksQ0FBQ00sUUFBUSxDQUFDRSxJQUFJO0lBQy9CLENBQUMsQ0FBQyxLQUFLLEVBQUVQLEtBQUssRUFBRSxDQUFDO1FBQ2YsTUFBTSxDQUFDUixHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLEVBQUVLLElBQUksQ0FBQyxDQUFDO1lBQUNDLEtBQUssRUFBRSxDQUErQjtRQUFDLENBQUM7SUFDeEUsQ0FBQztBQUNILENBQUM7QUFFRCxFQUFpQjtBQUNWLEtBQUssQ0FBQ1EsTUFBTSxHQUFHLENBQUM7SUFDckJDLEdBQUcsRUFBRSxDQUFDO1FBQ0pDLFVBQVUsRUFBRSxJQUFJO1FBQ2hCQyxnQkFBZ0IsRUFBRSxJQUFJO0lBQ3hCLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29ycy1wcm94eS8uL3BhZ2VzL2FwaS9vcGVuYWkuanM/OTc3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBPcGVuQUlBcGkgPSByZXF1aXJlKFwib3BlbmFpXCIpO1xuXG5jb25zdCBvcGVuYWkgPSBuZXcgT3BlbkFJQXBpKHtcbiAga2V5OiBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBpZiAocmVxLm1ldGhvZCAhPT0gJ1BPU1QnKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5lbmQoKTtcbiAgfVxuXG4gIGNvbnN0IHsgcHJvbXB0LCBtYXhUb2tlbnMgfSA9IHJlcS5ib2R5O1xuXG4gIGlmICghcHJvbXB0KSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6ICdQcm9tcHQgaXMgcmVxdWlyZWQnIH0pO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBjb21wbGV0aW9uUmVxdWVzdCA9IG5ldyBDcmVhdGVDb21wbGV0aW9uUmVxdWVzdCh7XG4gICAgICBtb2RlbDogXCJkYXZpbmNpLTAwM1wiLFxuICAgICAgcHJvbXB0OiBwcm9tcHQsXG4gICAgICBtYXhfdG9rZW5zOiBtYXhUb2tlbnMgfHwgMTUwXG4gICAgfSk7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG9wZW5haS5jcmVhdGVDb21wbGV0aW9uKGNvbXBsZXRpb25SZXF1ZXN0KTtcbiAgICByZXR1cm4gcmVzLmpzb24ocmVzcG9uc2UuZGF0YSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdFcnJvciBpbnRlcmFjdGluZyB3aXRoIE9wZW5BSScgfSk7XG4gIH1cbn1cblxuLy8gQWxsb3cgYW55IENPUlNcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIGFwaToge1xuICAgIGJvZHlQYXJzZXI6IHRydWUsXG4gICAgZXh0ZXJuYWxSZXNvbHZlcjogdHJ1ZSxcbiAgfSxcbn07XG4iXSwibmFtZXMiOlsiT3BlbkFJQXBpIiwicmVxdWlyZSIsIm9wZW5haSIsImtleSIsInByb2Nlc3MiLCJlbnYiLCJPUEVOQUlfQVBJX0tFWSIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImVuZCIsInByb21wdCIsIm1heFRva2VucyIsImJvZHkiLCJqc29uIiwiZXJyb3IiLCJjb21wbGV0aW9uUmVxdWVzdCIsIkNyZWF0ZUNvbXBsZXRpb25SZXF1ZXN0IiwibW9kZWwiLCJtYXhfdG9rZW5zIiwicmVzcG9uc2UiLCJjcmVhdGVDb21wbGV0aW9uIiwiZGF0YSIsImNvbmZpZyIsImFwaSIsImJvZHlQYXJzZXIiLCJleHRlcm5hbFJlc29sdmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/openai.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/openai.js"));
module.exports = __webpack_exports__;

})();