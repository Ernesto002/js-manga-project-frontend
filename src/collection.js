class Collection {
    static all = []
    static collectionContainer = document.getElementById("collection-container")
    static collectionForm = document.getElementById("collection-form-container")

    constructor({id, title, volume_count, author, description, release_year}){
        this.id = id
        this.title = title
        this.volume_count = volume_count
        this.author = author
        this.description = description
        this.release_year = release_year

        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `collection-${this.id}`
        this.element.addEventListener("click", this.handleCollectionDelete)
        this.element.addEventListener("click", this.handleCollectionInfo)
        Collection.all.push(this)
    }

    collectionHTML(){
        this.element.innerHTML += `
            <div>
                <h3>${this.title}</h3>
                <p>Released ${this.release_year}</p>
                <p>By ${this.author}</p>
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

    appendCollectionToDom(){
        Collection.collectionContainer.append(this.collectionHTML())
    }

    static renderCollectionForm(){
        Collection.collectionForm.innerHTML += `
        <br>
        <div class="form__item">
            <button id="manga-index">Manga Index</button>
        </div>
        <br>
        <br>
        <form class="form">
            <div class="form__title">
                Add a Series!
            </div>
            <div class="form__item">
                <label for="giventitle" class="form__label">Title</label>
                <input type="text" class="form__input" name="giventitle" id="collection-title" placeholder="Series title">
            </div>
            <div class="form__item">
                <label for="givenvolumecount" class="form__label">Volume Count</label>
                <input type="text" class="form__input" name="givenvolumecount" id="volume_count" placeholder="Total number of volumes">
            </div>
            <div class="form__item">   
                <label for="givenauthor" class="form__label">Author</label>
                <input type="text" class="form__input" name="givenauthor" id="collection-author" placeholder="Author of series">
            </div>
            <div class="form__item">
                <label for="givendescription" class="form__label">Description</label>
                <input type="text" class="form__input" name="givendescription" id="collection-description" placeholder="Summary of series">
            </div>
            <div class="form__item">
                <label for="givenreleaseyear" class="form__label">Release Year</label>
                <input type="text" class="form__input" name="givenreleaseyear" id="collection-release" placeholder="Year series was released">
            </div>
            <div class="form__item">
                <button class="form__bttn" type="submit">Submit</button>
            </div>
        <form>
        `
        const mangaIndex = document.getElementById("manga-index")
        mangaIndex.addEventListener("click", showManga)
    }

    handleCollectionDelete = () => {
        if(event.target.innerText === "Delete"){
            this.element.remove()
            collectionService.deleteCollection(this.id)
        }
    }

    handleCollectionInfo = () => {
        if(event.target.innerText === "Learn More"){
            collectionService.collectionInfo(this.id)
        }
    }
}