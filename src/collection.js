class Collection {
    static all = []
    static collectionContainer = document.getElementById("collection-container")
    static collectionForm = document.getElementById("collection-form-container")

    constructor({id, title, volume_count, author, description, img, release_year}){
        this.id = id
        this.title = title
        this.volume_count = volume_count
        this.author = author
        this.description = description
        this.img = img
        this.release_year = release_year

        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `collection-${this.id}`
        this.element.addEventListener("click", this.handleCollectionDelete)
        Collection.all.push(this)
    }
    collectionHTML(){
        this.element.innerHTML += `
            <div>
                <img src=${this.img} />
                <h3>${this.title}</h3>
                <p>Volume Count ${this.volume_count}</p>
                <p>Released ${this.release_year}</p>
                <p>By ${this.author}</p>
                <p>${this.description}</p>
            </div>
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
            Title: <input type="text" id="collection-title">
            Volume Count: <input type="text" id="volume_count">
            Author: <input type="text" id="collection-author">
            Description: <input type="text" id="collection-description">
            Image URL: <input type="text" id="collection-img">
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
}