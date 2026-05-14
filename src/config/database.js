import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
const defaultData = {
    PSN: [
        {
            id:1,
            nome: "God of War",
            criador: "Santa Mônica",
            ano: "2018",
            categoria: "Aventura"
        },
        {
            id:2,
            nome: "No Mans Sky",
            criador: "Hello Games",
            ano: "2016",
            categoria: "Sobrevivência"
        }
         ],
    Users: [
        {
            id:1,
            nome: "Pedro Vinicius",
            email: "pedro.vinicius@example.com",
            idade: 25,
            senha: "senha123"
        },
        {   
            id:2,
            nome: "Maria Silva",
            email: "maria.silva@example.com",
            idade: 30,
            senha: "senha456"
        }]

};
const adapter = new JSONFile('db.json');
const db = new Low(adapter, defaultData);
await db.read();
export default db;