export class PsnResponseDTO {
    constructor(psn) {
        this.id = psn.id;
        this.nome = psn.nome;
        this.criador = psn.criador;
        this.ano = psn.ano;
        this.categoria = psn.categoria;
    }
};