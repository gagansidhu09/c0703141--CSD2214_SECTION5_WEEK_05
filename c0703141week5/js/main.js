

function arrays() {
    var pens;
    pens = new Array("red", "orange", "green", "blue", "purple");
    markers = pens;
    console.log(markers);
    console.log(markers[0]);
    for (i = 0; i < markers.length; i++) {
        alert(markers[i]);

    }
    alert("Length of array is:" + markers.length);
}