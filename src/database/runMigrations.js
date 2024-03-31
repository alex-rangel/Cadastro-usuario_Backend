const path = require('path')
const fs = require('fs')
const conection = require('./conection')

const runmigration = ()=>{
    
    const fileDatabaseDir = path.join(__dirname, "migrations");

    fs.readdir(fileDatabaseDir, (err, files) =>{
        files.forEach(file => {
            fs.readFile(path.join(fileDatabaseDir,file), (err, content) =>{
                if(err){
                    console.error(err)
                }
                
                const runMigrationQuery = content.toString()

                conection.query(runMigrationQuery, (error, result) =>{
                    if(error){
                        console.log(error)
                    }

                })
            })
        })
    })

}

runmigration()

module.exports = runmigration