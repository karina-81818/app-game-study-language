 class Del{
         static async delWords(){
               const res = await fetch(`/api/words/delete`, {
                    method: "DELETE",
                    headers: {'Content-Type':"application/json"},
                });
                const data = await res.json()
                return data
        }
    }
export default Del;
   