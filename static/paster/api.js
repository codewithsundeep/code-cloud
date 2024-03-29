import { secretSwal } from "/js/secretswal.js";
import { removeSecret } from "/js/removesecret.js";
import { textLoad } from "/js/loadingbtn.js";
import { sendtodbtext } from "/js/textsend.js";
import { sendtodbcode } from "./js/codesend.js";
const sendtext = document.querySelector("#textsend");
const code = document.querySelector("#code");
const file1 = document.querySelector("#file");
const sendcode = document.querySelector("#codesend");
const sendfile = document.querySelector("#sendfile");
const setsecret = document.querySelector("#setsecret");
const delsecret = document.querySelector("#delsecret");
setsecret.addEventListener("click", secretSwal);
sendtext.addEventListener("click", sendtodbtext);
sendcode.addEventListener("click", sendtodbcode);
delsecret.addEventListener("click", removeSecret);
