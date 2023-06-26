import axios from 'axios';
const URL_WS = process.env.REACT_APP_API; //WS viene de "Web Services"

const listProductsService = async ()=>{
    return await axios.get(`${URL_WS}/productos`);
};

export {listProductsService};