class Manga{
    static all = []

    constructor(id, title, volume_number, author, description, img, release_year, series_id){
        this.id = id
        this.title = title
        this.volume_number = volume_number
        this.author = author
        this.description = description
        this.img = img
        this.release_year = release_year
        this.series_id 

        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `contact-${this.id}`

        Manga.all.push(this)
    }
}