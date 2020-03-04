class API{
    async getData(){
        const total=400
        const conection=await fetch(`https://api.datos.gob.mx/v1/precio.gasolina.publico?pageSize=${total}`)
        const data= await conection.json()
        return data
        
    }
}