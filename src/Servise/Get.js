export default class Get{
    static async getWords(){
        try{
            const resp = await fetch('/api/words');
            const data = await resp.json();
            return data;
        }catch(err){
            return err.toString()
        }
    }
}