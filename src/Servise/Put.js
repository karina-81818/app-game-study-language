class Put{
    static async editServerData(id){
        try{
            await fetch(`/api/words/${id}/update`, {
                method: "PUT",
                headers: {'Content-Type':"application/json"},
                body: JSON.stringify()
            })
        }catch(err){
            console.error(err)
        } 
    }
}
export default Put;