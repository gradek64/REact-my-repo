import axios from 'axios';

const secretWordService = () =>{
      
    const get = async () => await axios.get('http://localhost:3000/sockjs-node/info?t=1539164045592');
    return {
        getSecretWord:get()
    };
  
};   

export default secretWordService;   
