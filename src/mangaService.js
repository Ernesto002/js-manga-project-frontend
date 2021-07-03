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
                console.log(m.collection_id)
                m.appendMangaToDom()
            }
        })
    }

    collectMangaForm(){
        const mangaObj = {
            title: document.getElementById("title").value,
            volume_number: document.getElementById("volume_number").value,
            author: document.getElementById("author").value,
            description: document.getElementById("description").value,
            release_year: document.getElementById("release_year").value,
            collection_id: document.getElementById("collection").value
        }
        return mangaObj
    }

    createManga(){
        event.preventDefault()
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.collectMangaForm())
        }
        fetch(`${this.endpoint}/mangas`, options)
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
                <a id="back-bttn" href="#">Home</a>
            `

            const backBttn = document.getElementById("back-bttn")
            backBttn.addEventListener("click", gooBack)
        })
    }
}