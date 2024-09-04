import axios from 'axios'   


// axios.defaults.baseURL = "https://api.titansmaxplus.com/api/"


const useAxios = axios.create({
    // baseURL: process.env.API_URL,
    // baseURL: "https://lwa7.test/api",
    baseURL: "https://api.titansmaxplus.com/api/",
    // headers: {
    //     // Accept: '*/*',
    //     'Content-Type': 'application/json',
    //     'X-Requested-With': 'XMLHttpRequest'
    //     // "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    //     // 'Content-Type': 'application/json', 
    //     // 'X-Requested-With': 'XMLHttpRequest'
    // },
})

export default useAxios;