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
            <div class="div__container">
                <div class="div__title">   
                    <h1 id="manga-title">${this.title}</h1>
                </div>
                <div class="div__volume_number">
                    <p>Volume ${this.volume_number}</p>
                </div>
                <div class="div__collection_id">
                    <p id="m-collection-id">${this.collection_id}</p>
                </div>
            </div>
            <div class="form__item">
                <button class="bttn">Learn More</button>
            </div>
            <div class="form__item">
                <button class="bttn">Delete</button>
            </div>
        `
        return this.element
    }

    appendMangaToDom(){
        Manga.mangaContainer.append(this.mangaHTML())
    }

    static renderMangaForm(){
        Manga.mangaForm.innerHTML += `
        <br>
        <a id="back-bttn" href="#">Back</a>
        <br>
        <br>
        <form class="form">
            <div class="form__title">
                Add a volume!
            </div>
            <div class="form__item">
                <label for="giventitle" class="form__label">Title</label>
                <input type="text" class="form__input" name="giventitle" id="title" placeholder="Volume Title">
            </div>
            <div class="form__item">
                <label for="givenvolumenumber" class="form__label">Volume Number</label>
                <input type="text" class="form__input name="givenvolumenumber" id="volume_number" placeholder="Number of volume">
            </div>
            <div class="form__item">
                <label for="givenauthor" class="form__label">Author</label>
                <input type="text" class="form__input" name="givenauthor" id="author" placeholder="Author of series">
            </div>
            <div class="form__item">
                <label for="givendescription" class="form__label">Description</label>
                <input type="text" class="form__input" name="givendescription" id="description" placeholder="Summary of volume">
            </div>
            <div class="form__item">
                <label for="givenreleaseyear" class="form__label">Release Year</label>
                <input type="text" class="form__input" name="givenreleaseyear" id="release_year" placeholder="Year volume was released">
            </div>
            <div class="form__item">
                <label for="givencollection" class="form__label">Series</label>
                <input type="text" class="form__input" name="givencollection" id="collection" placeholder="Series this volume belongs to">
            </div>
            <div class="form__item">
                <button class="form__bttn" type="submit">Submit</button>
            </div>
        <form>
        `
        const backBttn = document.getElementById("back-bttn")
        backBttn.addEventListener("click", goBack)
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