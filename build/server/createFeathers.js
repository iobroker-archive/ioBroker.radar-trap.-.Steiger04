"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var createFeathers_exports = {};
__export(createFeathers_exports, {
  feathers: () => import_app.default,
  provideFeathers: () => provideFeathers,
  server: () => server
});
module.exports = __toCommonJS(createFeathers_exports);
var import_app = __toESM(require("./app"));
var import_logger = __toESM(require("./logger"));
let server;
function provideFeathers(that, port) {
  server = import_app.default.listen(port);
  server.on("listening", () => {
    import_logger.default.info("Feathers application started on http://%s:%d", import_app.default.get("host"), port);
    that.setStateAsync("info.connection", true, true).catch((ex) => console.log(ex));
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  feathers,
  provideFeathers,
  server
});
//# sourceMappingURL=createFeathers.js.map
