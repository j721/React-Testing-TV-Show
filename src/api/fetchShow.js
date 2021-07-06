import axios from 'axios';

export const fetchShow = () => {
    return axios
    .get(
      "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
    )
    .then(res => {
        console.log('api data returned', res)
     return res; 
    })
    .catch(err=>{
        console.log('api data failed to return', err);
        return err; 
    })
};