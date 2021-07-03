class Manga {
    static all = []
    static mangaContainer = document.getElementById("manga-container")
    static mangaForm = document.getElementById("manga-form-container")

    constructor({id, title, volume_number, author, description, img, release_year, collection_id}){
        this.id = id
        this.title = title
        this.volume_number = volume_number
        this.author = author
        this.description = description
        this.img = img
        this.release_year = release_year
        this.collection_id = collection_id

        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `manga-${this.id}`
        this.element.addEventListener("click", this.handleMangaDelete)    
        Manga.all.push(this)
    }
    mangaHTML(){
        this.element.innerHTML += `
            <div>
                <img src=${this.img} />
                <h3>${this.title}</h3>
                <p>Volume ${this.volume_number}</p>
                <p>Released ${this.release_year}</p>
                <p>By ${this.author}</p>
                <p>${this.description}</p>
                <p>${this.collection_id}</p>
            </div>
            <button id="delete-bttn">Delete</button>
            <br>
            <br>
        `
        return this.element
    }
    
    appendMangaToDom(){
        if(this.collection_id === Collection.id){
            Manga.mangaContainer.append(this.mangaHTML())
        }
    }

    static renderMangaForm(){
        Manga.mangaForm.innerHTML += `
        <form id="new-manga-form">
            Title: <input type="text" id="title">
            Volume Number: <input type="text" id="volume_number">
            Author: <input type="text" id="author">
            Description: <input type="text" id="description">
            Image URL: <input type="text" id="img">
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

    handleGetMangas = () => {
        if(event.target.innerText === "Volumes Within Collection")
        mangaService.getMangas(this.id)
    }
}