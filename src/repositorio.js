import { readFileSync } from "node:fs"

export class Repositorio {
    constructor() {
      this.pecas = JSON.parse(readFileSync('./data/pecas.json'));
    }
  
    getPeca(apre){
      return this.pecas[apre.id]
    }
  
  }