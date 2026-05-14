export class UserResponseDTO {
    constructor(user) {
        this.id = user.id;
        this.nome = user.nome;
        this.idade = user.idade;
        this.email = user.email;
        this.senha = user.senha;
    }
}