class Manga{
    static all = []
    static mangaContainer = document.getElementById("manga-container")

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
        `
        return this.element
    }
    
    appendToDom(){
        Manga.mangaContainer.append(this.mangaHTML())
    }
}