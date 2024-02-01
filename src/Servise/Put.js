class Put{
    static async editServerData(obj){
        try{
            await fetch('/api/words/update', {
                method: "PUT",
                headers: {'Content-Type':"application/json"},
                body: JSON.stringify(obj)
            })
        }catch(err){
            console.error(err)
        } 
    }
}
export default Put;