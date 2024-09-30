import express from "express";




const app = express();




app.get("/", (request: any, response: any) => {
    
    return response.status(401).json({
        message: "Olá, seja bem-vindo(a)"
    })
})


app.listen(3005, () => {
    console.log("rodando com sucesso!")
})