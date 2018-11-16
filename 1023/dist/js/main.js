var todoService = (function () {

  var path ="http://localhost:8080/todo/";

  function create(obj, callback) {
    console.log(obj);
    $.ajax({

      type:"post",
      data:JSON.stringify(obj),
      contentType:"application/json; charset=utf-8",
      success: function (result,status, xhr) {
        callback(result);
      }
    })
  }

  return {create:create}
})();
