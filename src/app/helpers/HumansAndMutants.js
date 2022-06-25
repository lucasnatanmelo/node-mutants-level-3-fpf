const humansAndMutants = (db) =>{
    let qttHumans = 0;
    let qttMutants = 0;
    let ratio = 0;

    for(i in db){
        if(db[i].mutant === true){
            qttMutants += 1;
        }else{
            qttHumans += 1;
        }
    }

    if(qttHumans != 0){
        ratio = (qttMutants/qttHumans).toFixed(2);
    }else{
        ratio = 0
    }

    return {"count_mutants_dna": qttMutants, "count_human_dna": qttHumans, "ratio":ratio}

}

module.exports = humansAndMutants