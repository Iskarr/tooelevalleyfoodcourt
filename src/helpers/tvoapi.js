const baseURL = "https://tv.9st.one/tvo"

class TVOAPI {

    queryBusiness(url, cb) { 
        fetch(baseURL + url) 
        .then(response => response.json())
        .then(json=>cb(json))
        .catch(error => {
            console.log("Error: ", error)
        })
    }

    getBaseURL() {
        return baseURL
    }
}

export let tvoapi = new TVOAPI();