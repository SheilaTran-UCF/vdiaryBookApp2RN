"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryList = exports.CountryPicker = void 0;
const PhoneInput_1 = __importDefault(require("./PhoneInput"));
var CountryPicker_1 = require("./CountryPicker");
Object.defineProperty(exports, "CountryPicker", { enumerable: true, get: function () { return __importDefault(CountryPicker_1).default; } });
var countries_json_1 = require("./resources/countries.json");
Object.defineProperty(exports, "CountryList", { enumerable: true, get: function () { return __importDefault(countries_json_1).default; } });
exports.default = PhoneInput_1.default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDhEQUFzQztBQUV0QyxpREFBMkQ7QUFBbEQsK0hBQUEsT0FBTyxPQUFpQjtBQUNqQyw2REFBb0U7QUFBM0QsOEhBQUEsT0FBTyxPQUFlO0FBQy9CLGtCQUFlLG9CQUFVLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGhvbmVJbnB1dCBmcm9tICcuL1Bob25lSW5wdXQnO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIENvdW50cnlQaWNrZXIgfSBmcm9tICcuL0NvdW50cnlQaWNrZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb3VudHJ5TGlzdCB9IGZyb20gJy4vcmVzb3VyY2VzL2NvdW50cmllcy5qc29uJztcbmV4cG9ydCBkZWZhdWx0IFBob25lSW5wdXQ7XG4iXX0=