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
        const configObj = {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(manga)
        }
        fetch(`${this.endpoint}/mangas`, configObj)
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
                <div class="div__container">
                    <div class="div__title">
                        <h1>${mangaInfo.title}</h1>
                    </div>
                    <div class="div__volume_number">
                        Volume ${mangaInfo.volume_number}
                    </div>
                    <br>
                    <div class="div__release_year">
                        Released ${mangaInfo.release_year}
                    </div>
                    <br>
                    <div class="div__author">
                        By: ${mangaInfo.author}
                    </div>
                    <br>
                    <div class="div__description">
                        Description: ${mangaInfo.description}
                    </div>
                    <br>
                    <a id="back-bttn" href="#">Back</a>
                </div>
            `

            const backBttn = document.getElementById("back-bttn")
            backBttn.addEventListener("click", showManga)
            Manga.mangaForm.innerHTML = " "
        })
    }
}