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

    createCollection(){
        const collection = {
            title: document.getElementById("collection-title").value,
            volume_count: document.getElementById("volume_count").value,
            author: document.getElementById("collection-author").value,
            description: document.getElementById("collection-description").value,
            image_url: document.getElementById("collection-img").value,
            release_year: document.getElementById("collection-release").value
        }
        const configCollectionObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(collection)
        }

        fetch(`${this.endpoint}/collections`, configCollectionObj)
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
}