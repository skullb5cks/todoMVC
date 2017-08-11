(function() {
    function Todo(name) {

    }

    var todo = new Todo('todolist');
    
    function setView() {
        todo.controller.setView(document.location.hash);
    }
})