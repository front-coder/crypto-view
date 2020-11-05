import axios from 'axios'

import dotenv from "dotenv";
dotenv.config();

export const cryptoHttp = axios.create({
   baseURL:  'https://min-api.cryptocompare.com/data',
   headers: {
    authorization: `Apikey ${process.env.CRYPTO_API}`
   }
})