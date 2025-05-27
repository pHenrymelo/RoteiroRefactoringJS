import { readFileSync } from "node:fs";
import { gerarFaturaHTML, gerarFaturaStr } from "./apresentacao.js";
import { Repositorio } from "./repositorio.js";
import { ServicoCalculoFatura } from "./servico.js";

const faturas = JSON.parse(readFileSync('./faturas.json'));
const calc = new ServicoCalculoFatura(new Repositorio());
const faturaStr = gerarFaturaStr(faturas, calc);
console.log(faturaStr);

const faturaHTML = gerarFaturaHTML(faturas, calc)
console.log(faturaHTML);
