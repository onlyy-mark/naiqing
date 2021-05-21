import axios from 'axios'
const BASE_URL = "http://admin.gxxmglzx.com/tender/test/"

export default function ({ url, data = {} }){
    return new Promise(resolve => {
        axios.get(BASE_URL + url,{
            params:data
        }).then(res => {
            if(res.data.errcode === 200){
                resolve(res.data)
            }else{
                console.log(res.errmsg);
            }
        }).catch(err=>{
            console.log(err)
        })
    })
}