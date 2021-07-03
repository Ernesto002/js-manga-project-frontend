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
                m.appendMangaToDom()
            }
        })
    }

    createManga(){
        const manga = {
            title: document.getElementById("title").value,
            volume_number: document.getElementById("volume_number").value,
            author: document.getElementById("author").value,
            description: document.getElementById("description").value,
            release_year: document.getElementById("release_year").value,
            collection_id: document.getElementById("collection").value
        }
        const configMangaObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(manga)
        }

        fetch(`${this.endpoint}/mangas`, configMangaObj)
        .then(resp => resp.json())
        .then(manga => {
            const m = new Manga(manga)
            m.appendMangaToDom()
        })
    }

    deleteManga(id){
        fetch(`${this.endpoint}/mangas/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(resp => resp.json())
        .then(json => alert(json.message))
    }

    mangaInfo(id){
        fetch(`${this.endpoint}/mangas/${id}`)
        .then(resp => resp.json())
        .then(manga => {
            const mangaInfo = manga
            Manga.mangaContainer.innerHTML = " "
            Collection.collectionContainer.innerHTML = " "
            Manga.mangaContainer.innerHTML += `
                <h3>${mangaInfo.title}</h3>
                Volume <p>${mangaInfo.volume_number}</p>
                Released <p>${mangaInfo.release_year}</p>
                By: <p>${mangaInfo.author}</p>
                <p>${mangaInfo.description}</p>
            `
        })
    }
}