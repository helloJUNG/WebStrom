var todoList2 = (function () {

    function remove(pk, callback) {

        $.post("http://localhost:8080/jsonEx/todo/remove",{pk:pk},function (data) {
            console.log(data);
            callback(data.result);
        })

    }

    function getAll(callback) {

        $.getJSON("http://localhost:8080/jsonEx/todo/all", function (list) {
            console.log(list);
            callback(list);
        });

    }

    function add(obj, callback) {

        $.post("http://localhost:8080/jsonEx/todo/add", {title: obj}, function (data) {
            console.log(data);
            callback(data.pk);
        });
    }
    return{add:add, getAll:getAll, remove:remove}
})();