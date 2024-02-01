class Post{
    static async wordsServerData(obj){
        try{
            await fetch("/api/words/add.", {
                method: "POST",
                headers: {'Content-Type':"application/json;charset=utf-8"},
                body: JSON.stringify(obj)
            })
        }catch(err){
            console.error(err)
        } 
    }
}
export default Post;