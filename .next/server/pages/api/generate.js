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
exports.id = "pages/api/generate";
exports.ids = ["pages/api/generate"];
exports.modules = {

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "(api)/./pages/api/generate.js":
/*!*******************************!*\
  !*** ./pages/api/generate.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst express = __webpack_require__(/*! express */ \"express\");\nconst cors = __webpack_require__(/*! cors */ \"cors\");\nconst app = express();\napp.use(cors());\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    // Set CORS headers\n    res.setHeader(\"Access-Control-Allow-Origin\", \"*\"); // Allow any origin\n    res.setHeader(\"Access-Control-Allow-Methods\", \"POST, OPTIONS\"); // Allow POST and OPTIONS methods\n    res.setHeader(\"Access-Control-Allow-Headers\", \"Content-Type\"); // Allow Content-Type header\n    // Handle pre-flight request. Don't run the rest of the method body if this is a pre-flight request.\n    if (req.method === \"OPTIONS\") {\n        res.status(200).end();\n        return;\n    }\n    if (!configuration.apiKey) {\n        res.status(500).json({\n            error: {\n                message: \"OpenAI API key not configured, please follow instructions in README.md\"\n            }\n        });\n        return;\n    }\n    const stockbot = req.body.stockbot || \"\";\n    if (stockbot.trim().length === 0) {\n        res.status(400).json({\n            error: {\n                message: \"Please enter a valid stockbot\"\n            }\n        });\n        return;\n    }\n    try {\n        const completion = await openai.createCompletion({\n            model: \"text-davinci-003\",\n            prompt: generatePrompt(stockbot),\n            temperature: 0.6\n        });\n        res.status(200).json({\n            result: completion.data.choices[0].text\n        });\n    } catch (error) {\n        // Consider adjusting the error handling logic for your use case\n        if (error.response) {\n            console.error(error.response.status, error.response.data);\n            res.status(error.response.status).json(error.response.data);\n        } else {\n            console.error(`Error with OpenAI API request: ${error.message}`);\n            res.status(500).json({\n                error: {\n                    message: \"An error occurred during your request.\"\n                }\n            });\n        }\n    }\n}\nfunction generatePrompt(stockbot) {\n    const capitalizedstockbot = stockbot[0].toUpperCase() + stockbot.slice(1).toLowerCase();\n    return `Suggest three names for an stockbot that is a superhero.\n\nstockbot: Cat\nNames: Captain Sharpclaw, Agent Fluffball, The Incredible Feline\nstockbot: Dog\nNames: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot\nstockbot: ${capitalizedstockbot}\nNames:`;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtEO0FBQ2xELE1BQU1FLFVBQVVDLG1CQUFPQSxDQUFDO0FBQ3hCLE1BQU1DLE9BQU9ELG1CQUFPQSxDQUFDO0FBQ3JCLE1BQU1FLE1BQU1IO0FBRVpHLElBQUlDLEdBQUcsQ0FBQ0Y7QUFHUixNQUFNRyxnQkFBZ0IsSUFBSVAsaURBQWFBLENBQUM7SUFDdENRLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsY0FBYztBQUNwQztBQUNBLE1BQU1DLFNBQVMsSUFBSVgsNkNBQVNBLENBQUNNO0FBRTdCLDZCQUFlLDBDQUFnQk0sR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDdkMsbUJBQW1CO0lBQ25CQSxJQUFJQyxTQUFTLENBQUMsK0JBQStCLE1BQU0sbUJBQW1CO0lBQ3RFRCxJQUFJQyxTQUFTLENBQUMsZ0NBQWdDLGtCQUFrQixpQ0FBaUM7SUFDakdELElBQUlDLFNBQVMsQ0FBQyxnQ0FBZ0MsaUJBQWlCLDRCQUE0QjtJQUUzRixvR0FBb0c7SUFDcEcsSUFBSUYsSUFBSUcsTUFBTSxLQUFLLFdBQVc7UUFDNUJGLElBQUlHLE1BQU0sQ0FBQyxLQUFLQyxHQUFHO1FBQ25CO0lBQ0YsQ0FBQztJQUVELElBQUksQ0FBQ1gsY0FBY0MsTUFBTSxFQUFFO1FBQ3pCTSxJQUFJRyxNQUFNLENBQUMsS0FBS0UsSUFBSSxDQUFDO1lBQ25CQyxPQUFPO2dCQUNMQyxTQUFTO1lBQ1g7UUFDRjtRQUNBO0lBQ0YsQ0FBQztJQUVELE1BQU1DLFdBQVdULElBQUlVLElBQUksQ0FBQ0QsUUFBUSxJQUFJO0lBQ3RDLElBQUlBLFNBQVNFLElBQUksR0FBR0MsTUFBTSxLQUFLLEdBQUc7UUFDaENYLElBQUlHLE1BQU0sQ0FBQyxLQUFLRSxJQUFJLENBQUM7WUFDbkJDLE9BQU87Z0JBQ0xDLFNBQVM7WUFDWDtRQUNGO1FBQ0E7SUFDRixDQUFDO0lBRUQsSUFBSTtRQUNGLE1BQU1LLGFBQWEsTUFBTWQsT0FBT2UsZ0JBQWdCLENBQUM7WUFDL0NDLE9BQU87WUFDUEMsUUFBUUMsZUFBZVI7WUFDdkJTLGFBQWE7UUFDZjtRQUNBakIsSUFBSUcsTUFBTSxDQUFDLEtBQUtFLElBQUksQ0FBQztZQUFFYSxRQUFRTixXQUFXTyxJQUFJLENBQUNDLE9BQU8sQ0FBQyxFQUFFLENBQUNDLElBQUk7UUFBQztJQUNqRSxFQUFFLE9BQU1mLE9BQU87UUFDYixnRUFBZ0U7UUFDaEUsSUFBSUEsTUFBTWdCLFFBQVEsRUFBRTtZQUNsQkMsUUFBUWpCLEtBQUssQ0FBQ0EsTUFBTWdCLFFBQVEsQ0FBQ25CLE1BQU0sRUFBRUcsTUFBTWdCLFFBQVEsQ0FBQ0gsSUFBSTtZQUN4RG5CLElBQUlHLE1BQU0sQ0FBQ0csTUFBTWdCLFFBQVEsQ0FBQ25CLE1BQU0sRUFBRUUsSUFBSSxDQUFDQyxNQUFNZ0IsUUFBUSxDQUFDSCxJQUFJO1FBQzVELE9BQU87WUFDTEksUUFBUWpCLEtBQUssQ0FBQyxDQUFDLCtCQUErQixFQUFFQSxNQUFNQyxPQUFPLENBQUMsQ0FBQztZQUMvRFAsSUFBSUcsTUFBTSxDQUFDLEtBQUtFLElBQUksQ0FBQztnQkFDbkJDLE9BQU87b0JBQ0xDLFNBQVM7Z0JBQ1g7WUFDRjtRQUNGLENBQUM7SUFDSDtBQUNGLENBQUM7QUFFRCxTQUFTUyxlQUFlUixRQUFRLEVBQUU7SUFDaEMsTUFBTWdCLHNCQUNKaEIsUUFBUSxDQUFDLEVBQUUsQ0FBQ2lCLFdBQVcsS0FBS2pCLFNBQVNrQixLQUFLLENBQUMsR0FBR0MsV0FBVztJQUMzRCxPQUFPLENBQUM7Ozs7OztVQU1BLEVBQUVILG9CQUFvQjtNQUMxQixDQUFDO0FBQ1AiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcGVuYWktcXVpY2tzdGFydC1ub2RlLy4vcGFnZXMvYXBpL2dlbmVyYXRlLmpzPzYyN2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlndXJhdGlvbiwgT3BlbkFJQXBpIH0gZnJvbSBcIm9wZW5haVwiO1xuY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcbmNvbnN0IGNvcnMgPSByZXF1aXJlKCdjb3JzJyk7XG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbmFwcC51c2UoY29ycygpKTtcblxuXG5jb25zdCBjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24oe1xuICBhcGlLZXk6IHByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZLFxufSk7XG5jb25zdCBvcGVuYWkgPSBuZXcgT3BlbkFJQXBpKGNvbmZpZ3VyYXRpb24pO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAocmVxLCByZXMpIHtcbiAgLy8gU2V0IENPUlMgaGVhZGVyc1xuICByZXMuc2V0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpOyAvLyBBbGxvdyBhbnkgb3JpZ2luXG4gIHJlcy5zZXRIZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnLCAnUE9TVCwgT1BUSU9OUycpOyAvLyBBbGxvdyBQT1NUIGFuZCBPUFRJT05TIG1ldGhvZHNcbiAgcmVzLnNldEhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycycsICdDb250ZW50LVR5cGUnKTsgLy8gQWxsb3cgQ29udGVudC1UeXBlIGhlYWRlclxuXG4gIC8vIEhhbmRsZSBwcmUtZmxpZ2h0IHJlcXVlc3QuIERvbid0IHJ1biB0aGUgcmVzdCBvZiB0aGUgbWV0aG9kIGJvZHkgaWYgdGhpcyBpcyBhIHByZS1mbGlnaHQgcmVxdWVzdC5cbiAgaWYgKHJlcS5tZXRob2QgPT09ICdPUFRJT05TJykge1xuICAgIHJlcy5zdGF0dXMoMjAwKS5lbmQoKTtcbiAgICByZXR1cm47XG4gIH1cbiAgXG4gIGlmICghY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICBlcnJvcjoge1xuICAgICAgICBtZXNzYWdlOiBcIk9wZW5BSSBBUEkga2V5IG5vdCBjb25maWd1cmVkLCBwbGVhc2UgZm9sbG93IGluc3RydWN0aW9ucyBpbiBSRUFETUUubWRcIixcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBzdG9ja2JvdCA9IHJlcS5ib2R5LnN0b2NrYm90IHx8ICcnO1xuICBpZiAoc3RvY2tib3QudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xuICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtcbiAgICAgIGVycm9yOiB7XG4gICAgICAgIG1lc3NhZ2U6IFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgc3RvY2tib3RcIixcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IGNvbXBsZXRpb24gPSBhd2FpdCBvcGVuYWkuY3JlYXRlQ29tcGxldGlvbih7XG4gICAgICBtb2RlbDogXCJ0ZXh0LWRhdmluY2ktMDAzXCIsXG4gICAgICBwcm9tcHQ6IGdlbmVyYXRlUHJvbXB0KHN0b2NrYm90KSxcbiAgICAgIHRlbXBlcmF0dXJlOiAwLjYsXG4gICAgfSk7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyByZXN1bHQ6IGNvbXBsZXRpb24uZGF0YS5jaG9pY2VzWzBdLnRleHQgfSk7XG4gIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAvLyBDb25zaWRlciBhZGp1c3RpbmcgdGhlIGVycm9yIGhhbmRsaW5nIGxvZ2ljIGZvciB5b3VyIHVzZSBjYXNlXG4gICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yLnJlc3BvbnNlLnN0YXR1cywgZXJyb3IucmVzcG9uc2UuZGF0YSk7XG4gICAgICByZXMuc3RhdHVzKGVycm9yLnJlc3BvbnNlLnN0YXR1cykuanNvbihlcnJvci5yZXNwb25zZS5kYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2l0aCBPcGVuQUkgQVBJIHJlcXVlc3Q6ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICBtZXNzYWdlOiAnQW4gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIHlvdXIgcmVxdWVzdC4nLFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVQcm9tcHQoc3RvY2tib3QpIHtcbiAgY29uc3QgY2FwaXRhbGl6ZWRzdG9ja2JvdCA9XG4gICAgc3RvY2tib3RbMF0udG9VcHBlckNhc2UoKSArIHN0b2NrYm90LnNsaWNlKDEpLnRvTG93ZXJDYXNlKCk7XG4gIHJldHVybiBgU3VnZ2VzdCB0aHJlZSBuYW1lcyBmb3IgYW4gc3RvY2tib3QgdGhhdCBpcyBhIHN1cGVyaGVyby5cblxuc3RvY2tib3Q6IENhdFxuTmFtZXM6IENhcHRhaW4gU2hhcnBjbGF3LCBBZ2VudCBGbHVmZmJhbGwsIFRoZSBJbmNyZWRpYmxlIEZlbGluZVxuc3RvY2tib3Q6IERvZ1xuTmFtZXM6IFJ1ZmYgdGhlIFByb3RlY3RvciwgV29uZGVyIENhbmluZSwgU2lyIEJhcmtzLWEtTG90XG5zdG9ja2JvdDogJHtjYXBpdGFsaXplZHN0b2NrYm90fVxuTmFtZXM6YDtcbn1cbiJdLCJuYW1lcyI6WyJDb25maWd1cmF0aW9uIiwiT3BlbkFJQXBpIiwiZXhwcmVzcyIsInJlcXVpcmUiLCJjb3JzIiwiYXBwIiwidXNlIiwiY29uZmlndXJhdGlvbiIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJPUEVOQUlfQVBJX0tFWSIsIm9wZW5haSIsInJlcSIsInJlcyIsInNldEhlYWRlciIsIm1ldGhvZCIsInN0YXR1cyIsImVuZCIsImpzb24iLCJlcnJvciIsIm1lc3NhZ2UiLCJzdG9ja2JvdCIsImJvZHkiLCJ0cmltIiwibGVuZ3RoIiwiY29tcGxldGlvbiIsImNyZWF0ZUNvbXBsZXRpb24iLCJtb2RlbCIsInByb21wdCIsImdlbmVyYXRlUHJvbXB0IiwidGVtcGVyYXR1cmUiLCJyZXN1bHQiLCJkYXRhIiwiY2hvaWNlcyIsInRleHQiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJjYXBpdGFsaXplZHN0b2NrYm90IiwidG9VcHBlckNhc2UiLCJzbGljZSIsInRvTG93ZXJDYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/generate.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/generate.js"));
module.exports = __webpack_exports__;

})();