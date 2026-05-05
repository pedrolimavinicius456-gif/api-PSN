export const meuLog = (req, res, next) => {
    const data = new Date().toISOString();
    console.log(`[${data}] ${req.method} em ${req.url}`);
    next(); // IMPORTANTE: Passa para o próximo middleware ou rota
   };
