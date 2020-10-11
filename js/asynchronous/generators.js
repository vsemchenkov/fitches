window.onload = () => {
    
    genWrap(function* () {
        let movies = yield $.get('/js/asynchronous/data/movies.json');
        console.log(movies);
        let names = yield $.get('/js/asynchronous/data/names.json');
        console.log(names);
    })

    function genWrap(generator) {
        gen = generator();

        function handle(yielded) {
            console.log(yielded)
            if (!yielded.done) {
                yielded.value.then((data) => {
                    return handle(gen.next(data));
                })
            }
        }

        return handle(gen.next())
    }


}