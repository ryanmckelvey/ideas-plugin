document.addEventListener('DOMContentLoaded', function() {
    var submitButton = document.getElementById("submit");

    submitButton.addEventListener('click', function() {
        console.log(document.getElementById("txt").value);
    })
})