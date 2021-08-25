import { CMD, CMD_SRC$, CMD_WORK, URL_FULL, URL_PATH, URL_DOMN, URL_SUBD, URL_QERY, URL_HASH, DOM_NODE, DOM_BODY, DOM_HEAD, HD_TITL, HD_DESC, HD_IMGU, HD_IMGW, HD_IMGH, HD_ICON, HD_TYPE, URL_DATA, URL_PAGE, RTR_PREP, RTR_PRFX, RTR_POST, CFG_RUTR, $$_PATH, $$_LOAD, $$_VIEW, $$_ROOT, } from "./constants";
const ICO = {
    [CMD.ARGS]: null,
    [CMD.SUB$]: "",
    [CMD.RESO]: (acc, res) => null,
    [CMD.ERRO]: (acc, err, out$) => null,
};
const IC = Object.assign(Object.assign({}, ICO), { [CMD_WORK]: args => null, [CMD_SRC$]: null });
const C = data => null;
const PURL = {
    [URL_FULL]: "",
    [URL_PATH]: [""],
    [URL_DOMN]: [""],
    [URL_SUBD]: [""],
    [URL_QERY]: {},
    [URL_HASH]: "",
};
const HD = {
    [HD_TITL]: "",
    [HD_DESC]: "",
    [HD_IMGU]: "",
    [HD_IMGW]: 1 || "",
    [HD_IMGH]: 1 || "",
    [HD_ICON]: "",
    [HD_TYPE]: "",
};
const navNode = document.createElement("a") || document.getElementById("some-id") || document;
const TDOM = {
    [DOM_NODE]: navNode,
    [DOM_BODY]: null,
    [DOM_HEAD]: HD,
};
const RHBD = {
    [DOM_HEAD]: HD,
    [DOM_BODY]: null,
};
const RO = {
    [URL_DATA]: RHBD,
    [URL_PAGE]: C,
};
const RI = {
    [URL_FULL]: "",
    [DOM_NODE]: navNode,
};
const RCFG = {
    [RTR_PREP]: {} || [],
    [RTR_PRFX]: "",
    [RTR_POST]: {} || [],
    [CFG_RUTR]: ((url) => null),
};
const DD = {
    [$$_PATH]: [""],
    [$$_LOAD]: false,
    [$$_VIEW]: C,
    [$$_ROOT]: document.getElementById("root") || document,
};
