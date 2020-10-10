window.onload = () => {

    let http = new XMLHttpRequest();


    http.onreadystatechange = () => {
        if(http.readyState == 4 && http.status == 200) {
            console.log(JSON.parse(http.response));
        }
    }
    http.open("GET", "js/asynchronous/data/movies.json", true)
    http.send()


    $.get("/js/asynchronous/data/names.json",
        function (data) {
            console.log(data)
        }
    );
}

/*

*/