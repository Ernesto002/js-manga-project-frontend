class MangaService{
    constructor(endpoint){
        this.endpoint = endpoint
    }

    getMangas(){
        fetch(`${this.endpoint}/mangas`)
        .then(resp => resp.json())
        .then(mangas => {
            debugger
        })
    }
}