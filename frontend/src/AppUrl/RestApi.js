import axios from "axios";



   export  const  GetRequest = async (getUrl) => {
        return await axios.get(getUrl)
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          return 'error';
        })
    }

