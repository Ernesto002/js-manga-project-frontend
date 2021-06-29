class MangaService{
    constructor(endpoint){
        this.endpoint = endpoint
    }

    getMangas(){
        fetch(`${this.endpoint}/mangas`)
        .then(resp => resp.json())
        .then(mangas => {
            for (const manga of mangas){
                const m = new Manga(manga)
                m.appendToDom()
            }
        })
    }

    createManga(){
        const manga = {
            title: document.getElementById("title").value,
            volume_number: document.getElementById("volume_number").value,
            author: document.getElementById("author").value,
            description: document.getElementById("description").value,
            image_url: document.getElementById("img").value,
            release_year: document.getElementById("release_year").value
            // series_id: 1
        }
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(manga)
        }

        fetch(`${this.endpoint}/mangas`, configObj)
        .then(resp => resp.json())
        .then(manga => {
            const m = new Manga(manga)
            m.appendToDom()
        })
    }

    deleteManga(){
        fetch(`${this.endpoint}/mangas/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(resp => resp.json())
        .then(json => alert(json.message))
    }
}