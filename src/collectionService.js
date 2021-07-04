class CollectionService{
    constructor(endpoint){
        this.endpoint = endpoint
    }

    getCollections(){
        fetch(`${this.endpoint}/collections`)
        .then(resp => resp.json())
        .then(collections => {
            for (const collection of collections){
                const c = new Collection(collection)
                c.appendCollectionToDom()
            }
        })
    }

    collectCollectionForm(){
        const collectionObj = {
            title: document.getElementById("collection-title").value,
            volume_count: document.getElementById("volume_count").value,
            author: document.getElementById("collection-author").value,
            description: document.getElementById("collection-description").value,
            release_year: document.getElementById("collection-release").value
        }
        return collectionObj
    }

    createCollection(){
        event.preventDefault()
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.collectCollectionForm())
        }
        fetch(`${this.endpoint}/collections`, options)
        .then(resp => resp.json())
        .then(collection => {
            const c = new Collection(collection)
            c.appendCollectionToDom()
        })
    }


    
    deleteCollection(id){
        fetch(`${this.endpoint}/collections/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(resp => resp.json())
        .then(json => alert(json.message))
    }

    collectionInfo(id){
        fetch(`${this.endpoint}/collections/${id}`)
        .then(resp => resp.json())
        .then(collection => {
            const collectionInfo = collection
            Collection.collectionContainer.innerHTML = " "
            Collection.collectionForm.innerHTML = " "
            Collection.collectionContainer.innerHTML += `
                <h3 id="collection-title">${collectionInfo.title}</h3>
                <p>${collectionInfo.volume_count} Volumes</p>
                Released in<p>${collectionInfo.release_year}</p>
                By <p>${collectionInfo.author}</p>
                Description: <p>${collectionInfo.description}</p>
                <p id="collection-id">${collectionInfo.id}</p>
                <a id="back-bttn" href="#">Back</a>
            `

            const backBttn = document.getElementById("back-bttn")
            backBttn.addEventListener("click", goBack)
        })
    }

}