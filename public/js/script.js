$("#pic").on("change", function() {
    if ($("#pic")[0].files.length > 10) {
        alert("You can select only 10 images");
    } 
});

$("#mergeBtn").on("click", function(event) {
    if ($("#pic")[0].files.length > 10) {
        event.preventDefault();
        alert("You can select only 10 images");
    } 
});