const conection= require('../database/conection')

module.exports= {

    index(req, res){

        conection.query('SELECT * FROM usuario', (error, result)=>{
            if(error){
                res.json(error)
            }
            return res.json(result)
        })
    },

    store(req, res){

        const { id,nome,idade } = req.body

        conection.query(`INSERT INTO usuario VALUES(${id}, ${nome}, ${idade})`, (error, result)=>{
            if(error){
                res.status(400).json(error)
            }
            res.status(200).json('Usuario cadastrado com sucesso')
        })
    },

    delete(req, res){
        const { id } = req.params 

        conection.query(`DELETE FROM usuario where id=${id}`,(error, result)=>{
            if(error){
                res.status(400).json(error)
            }
            res.json("usuario apagado com sucesso")
        })
    }

}



