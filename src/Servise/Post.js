class Post{
    static async wordsServerData(obj){
        try{
            const res = await fetch("/api/words/add.", {
                method: "POST",
                headers: {'Content-Type':"application/json;charset=utf-8"},
                body: JSON.stringify(obj)
            })
            console.log(res)
        }catch(err){
            console.error(err)
        } 
    }
}
export default Post;