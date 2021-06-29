class Manga{
    static all = []
    static mangaContainer = document.getElementById("manga-container")
    static mangaForm = document.getElementById("form-container")

    constructor({id, title, volume_number, author, description, img, release_year, series_id}){
        this.id = id
        this.title = title
        this.volume_number = volume_number
        this.author = author
        this.description = description
        this.img = img
        this.release_year = release_year
        this.series_id = series_id

        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `contact-${this.id}`
        this.element.addEventListener("click", this.handleClick)    
        Manga.all.push(this)
    }
    mangaHTML(){
        this.element.innerHTML += `
            <div>
                <img src=${this.img} />
                <h3>${this.title}<h3>
                <p>Volume ${this.volume_number}</p>
                <p>Released ${this.release_year}</p>
                <p>By ${this.author}</p>
                <p>${this.description}</p>
            </div>
            <button id="delete-bttn">Delete</button>
            <br>
            <br>
        `
        return this.element
    }
    
    appendToDom(){
        Manga.mangaContainer.append(this.mangaHTML())
    }

    static renderForm(){
        Manga.mangaForm.innerHTML += `
            <form id="new-contact-form">
                Title: <input type="text" id="title">
                Volume Number: <input type="text" id="volume_number">
                Author: <input type="text" id="author">
                Description: <input type="text" id="description">
                Image URL: <input type="text" id="img">
                Release Year: <input type="text" id="release_year">
                <input type="submit" id="create">
            <form>
        `
    }

    handleClick = () => {
        if (event.target.innerText === "Delete"){
            mangaService.deleteManga(this.id)
        }
    }
}