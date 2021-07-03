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
            <button id="learn-more">Learn More</button>
            <br>
            <br>
            <button id="delete-collection">Delete</button>
            <br>
            <br>
        `
        return this.element
    }

    appendCollectionToDom(){
        Collection.collectionContainer.append(this.collectionHTML())
    }

    static renderCollectionForm(){
        Collection.collectionForm.innerHTML += `
        <form id="new-collection-form">
            Add a Series!
            <br>
            <br>
            Title: <input type="text" id="collection-title">
            Volume Count: <input type="text" id="volume_count">
            Author: <input type="text" id="collection-author">
            Description: <input type="text" id="collection-description">
            Release Year: <input type="text" id="collection-release">
            <input type="submit" id="create-collection">
        <form>
        `
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