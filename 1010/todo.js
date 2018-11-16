//모듈패턴
var todoList = (function () {

    function modify(obj, callback) {
        $.post("http://localhost:8080/jsonEx/todo/modify", obj, function (data) {
            console.log(data);
            callback(data.result);
        });
    }

    function remove(pk, callback) {

        $.post("http://localhost:8080/jsonEx/todo/remove", {pk: pk}, function (data) {
            console.log(data);
            callback(data.result);
        });
    }

    function getAll(callback) {
        $.getJSON("http://localhost:8080/jsonEx/todo/all", function (list) {
                console.log(list);
                callback(list);
            }
        );
    }

    function add(obj, callback) {
        // obj.pk = pk++;
        // //obj['pk']=pk++;
        // arr.push(obj);
        // callback(obj.pk);
        $.post("http://localhost:8080/jsonEx/todo/add", {title: obj}, function (data) {
            console.log(data);
            callback(data.pk);
        });
    }

    return {add: add, getAll: getAll, remove:remove, modify:modify}

})();