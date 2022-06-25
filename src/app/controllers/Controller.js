const hasMutation = require('../helpers/Hasmutation');
const humansAndMutants = require('../helpers/HumansAndMutants')

require('dotenv').config()

const { Pool } = require('pg');
const pool = new Pool({
    connectionString: process.env.POSTGRES_URL
});

class Controller {

    async mutantVerifier(req, res){
        const dnaObject = req.body;
        const {dna} = req.body;

        const result = hasMutation(dnaObject); 
        
        if(typeof result  === 'boolean'){
            try{ 
                await pool.query(
                    'INSERT INTO dnas(dna_array, mutant) VALUES ($1, $2) RETURNING *',
                    [dna, result]);
                if(result){
                    return res.status(200).send(result)
                }else{
                    return res.status(403).send(result)
                }
            } catch(err){
                console.log(err);
                return res.status(400).send(err)
            }
        }else{
            return res.status(403).send(result);
        }
            
    }
    
    async statsVerifier(req, res){

        try{
            const db = await pool.query(
                'SELECT * FROM dnas');
            let result = humansAndMutants(db.rows);
            return res.status(200).send(result);

        } catch(err){
            return res.status(400).send(err)
        }
        
    }

}

module.exports = new Controller();


