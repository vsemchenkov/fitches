window.onload = () => {

    function callback(data) {
        console.log(data);
    };

    let arr = [
        'bannana', 'orange', 'apple'
    ]

    arr.forEach(callback);

    $.get('/js/asynchronous/data/names.json', callback)

    // Ajax method

    function handlerError(jqXHR, textStatus, error) {
        console.log(error);
    };

    $.ajax({
        type: "GET",
        url: "/js/asynchronous/data/names.json",
        data: "data",
        success: cbNames,
        error: handlerError
    });


    function cbNames(data) {
        console.log(data);

        $.ajax({
            type: "GET",
            url: "/js/asynchronous/data/names.json",
            data: "data",
            success: cbMovies,
            error: handlerError
        });
    }

    function cbMovies(data) {
        console.log(data);

        $.ajax({
            type: "GET",
            url: "/js/asynchronous/data/movies.json",
            data: "data",
            success: function (response) {
                console.log
            },
            error: handlerError
        });
    }

}