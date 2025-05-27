import { readFileSync } from "node:fs"

export class Repositorio {
    constructor() {
      this.pecas = JSON.parse(readFileSync('./pecas.json'));
    }
  
    getPeca(apre){
      return this.pecas[apre.id]
    }
  
  }