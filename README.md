**<strong>DNA VERIFIER - HUMAN OR MUTANT + STATS - API<strong>**
----
  **API to verify if data sent is a human or mutant DNA and return quantity values of Humans, Mutants and ratio.** <br/>
  *node-mutants-level-3-fpf*

**MAIN ROUTES:**

<strong>POST: <strong> `https://node-mutants-level-3-fpf.herokuapp.com/mutants` (<strong>To verify DNA<strong>) <br/> 
<strong>GET: <strong> `https://node-mutants-level-3-fpf.herokuapp.com/stats` (<strong>To show STATS<strong>)


*  **URL Params**

   **None**

* **Data Params** <br/>
  `Text - JSON`


* **TYPES OF RESQUESTS AND RESPONSES:**  

  * Route: `/mutants`

    * **MUTANT DNA:**
    
      * **Code response:** <br/>200-OK<br />
      * **Input Data Params example:** <br /> 
      `{"dna": ["ACACGA", "CAGTGA", "CCATAA", "TGAACA", "TGACCT", "TCACTG"]}` <br />
      * **Return:** <br/> `true` <br />
      
      
    * **HUMAN DNA:**

      * **Code response:** <br/>403-FORBIDDEN <br />
      * **Input Data Params example:** <br/>`{"dna": ["ACACGA","CAGTGA", "CCATAA", "TGAACA", "TGACCT", "TCACTG"]}` <br />
      * **Return:** <br/> `false` <br />
      
      
    * **DNA TYPE NOT ALLOWED:**
      * **Input Data Params example:** <br/>`{"dna": ["ACxCyA","CAGTGA", "CCA", "2523", true, "TCACTG"]}` <br />
      * **Code response:** 401 UNAUTHORIZED <br />
      * **Return:** <br/> `{ error : "DNA type not allowed." }`<br />
      <br/>
  * Route: `/stats`

    * **STATS:**

      * **Code response:** <br/>200-OK<br />
      * **Input Data Params example:** <br/>`{"dna": ["ACACGA","CAGTGA", "CCATAA", "TGAACA", "TGACCT", "TCACTG"]}` <br />
      * **Return example:** <br/> `{"count_mutants_dna": 5, "count_human_dna": 7, "ratio": "0.71"}` <br />
      

* **API - TECH ESPECIFICATIONS** 

  * **NODEJS + Express** <br />
  * **HEROKU on cloud computing environment** <br />
  * **PostgreSQL on data base environment** <br />
  * **ElephantSQL on data base managment** <br />
<br/>
* **INSTALL**

  * **Install NODEJS + dependecies**
  `npm install express pg cors dot env`
  * **Install DEV dependecies** <br/>
   `npm install nodemon -D`
    

    
 
=======
# node-mutants-level-3-fpf

https://node-mutants-level-3-fpf.herokuapp.com
>>>>>>> b10649138498dc1c6d15b1e6f973b21a22e32c7b
