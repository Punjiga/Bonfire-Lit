//Este archivo funciona para extraer los datos del json, pero solamente los extrae, no los guarda
import data from '../data/data.json';
export function ExtractData (){
    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
            resolve(data)
        },500)
    })
}