window.onload = () => {

    function get(url) {
        return new Promise((resolve, reject) => {
            let http = new XMLHttpRequest();
            http.open('GET', url, true);
            http.onload = () => {
                if (http.status == 200) {
                    resolve(JSON.parse(http.response));
                } else {
                    reject(http.statusText);
                }
            };
            http.onerror = () => {
                reject(http.statusText);
            }
            http.send();
        })
    }

    let promise = get('/js/asynchronous/data/movies.json')
    promise.then(movies => {
        console.log(movies);
        return get('/js/asynchronous/data/names.json')
    }).then(names => {
        console.log(names);
    }).catch(err => {
        console.log(err);
    });


    // ------------------------------------------------------------------
    // Jquery
    // ------------------------------------------------------------------
    $.get('/js/asynchronous/data/movies.json').then(movies => {
        console.log(movies);
        return $.get('/js/asynchronous/data/names.json')
    }).then(names => {
        console.log(names);
    })
}