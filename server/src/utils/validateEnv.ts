const envalid = require('envalid');
const { str, port } = envalid
  
  function validateEnv() {
    envalid.cleanEnv(process.env, {
        DB_HOST:str(),
        DB_USER:str(),
        DB_PASSWORD: str(),
        DB_NAME:str()
    });
  }
  
  export default validateEnv;