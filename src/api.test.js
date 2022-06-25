// import request from 'supertest';
// import app from '/index';

describe('Testing api routes', ()=> {

    let dnaMutant =  ["CTGAGA", "CTGAGC", "TATTGT", "AGAGGG", "CCCCTA", "TCACTG"];
    let dnaHuman =  ["CTGAGC", "CTGAGC", "TATTGT", "AGAGGG", "CTCCTA", "TCACTG"];
    let dnaWrong =  [true, "CTGAGC", 1, "AGAGGG", "CTCCTA", "TCACTG"];
    let error = { error : "DNA type not allowed." }
    
    it('should return true', (done)=> {
        request(dnaMutant)
            .get('/mutant')
            .send
            .then(response => {
                expect(response.body).toBeTruthy();
                return done();
            });
    });
    it('should return false', (done)=> {
        request(dnaMutant)
            .get('/mutant')
            .send
            .then(response => {
                expect(response.body).toBeFalsy();
                return done();
            });
    });
    it('should return error', (done)=> {
        request(dnaMutant)
            .get('/mutant')
            .send
            .then(response => {
                expect(response.body).toBeFalsy();
                expect(response.body).toContain(error);
                return done();
            });
    });
});

