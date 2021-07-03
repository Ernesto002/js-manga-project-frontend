class Manga {
    static all = []
    static mangaContainer = document.getElementById("manga-container")
    static mangaForm = document.getElementById("manga-form-container")

    constructor({id, title, volume_number, author, description, release_year, collection_id}){
        this.id = id
        this.title = title
        this.volume_number = volume_number
        this.author = author
        this.description = description
        this.release_year = release_year
        this.collection_id = collection_id

        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `manga-${this.id}`
        this.element.addEventListener("click", this.handleMangaDelete)
        this.element.addEventListener("click", this.handleMangaInfo)
        Manga.all.push(this)
    }

    mangaHTML(){
        this.element.innerHTML += `
            <div>
                <h3 id="manga-title">${this.title}</h3>
                <p>Volume ${this.volume_number}</p>
                <p id="m-collection-id">${this.collection_id}</p>
            </div>
            <button id="learn-more">Learn More</button>
            <br>
            <br>
            <button id="delete-bttn">Delete</button>
            <br>
            <br>
        `
        return this.element
    }

    appendMangaToDom(){
        Manga.mangaContainer.append(this.mangaHTML())
    }

    static renderMangaForm(){
        Manga.mangaForm.innerHTML += `
        <form id="new-manga-form">
            Add a volume to this collection!
            <br>
            <br>
            Title: <input type="text" id="title">
            Volume Number: <input type="text" id="volume_number">
            Author: <input type="text" id="author">
            Description: <input type="text" id="description">
            Release Year: <input type="text" id="release_year">
            Collection: <input type="text" id="collection">
            <input type="submit" id="create">
        <form>
        `
    }

    handleMangaDelete = () => {
        if (event.target.innerText === "Delete"){
            this.element.remove()
            mangaService.deleteManga(this.id)
        }
    }

    handleMangaInfo = () => {
        if(event.target.innerText === "Learn More"){
            mangaService.mangaInfo(this.id)
        }
    }
}