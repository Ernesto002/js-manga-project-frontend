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
                <div class="div__container">
                    <div class="div__title">
                        <h1 id="collection-title">${collectionInfo.title}</h1>
                    </div>
                    <div class="div__volume_count">
                        <p>${collectionInfo.volume_count} Volumes</p>
                    </div>
                    <div class="div__release">
                        Released in ${collectionInfo.release_year}
                    </div>
                    <br>
                    <div class="div__author">
                        By ${collectionInfo.author}
                    </div>
                    <br>
                    <div class="div__description">
                        Description: ${collectionInfo.description}
                    </div>
                    <p id="collection-id">${collectionInfo.id}</p>
                    <a id="back-bttn" href="#">Back</a>
                </div>
            `

            const backBttn = document.getElementById("back-bttn")
            backBttn.addEventListener("click", goBack)
        })
    }

}