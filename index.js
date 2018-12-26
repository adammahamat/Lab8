var types = {
    plus: true,
    minus: true,
    linse: true,
    glass: true,
};

function filter() { //фильтер
    var root = document.getElementById('content');

    var nodes = root.childNodes;

    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].nodeName != "#text") {
            var className = nodes[i].className;
            var split = className.split(' ');

            var type = split[1];
            var dist = split[2];

            var can = true;

            if (type == "linse" && !types.linse)
                can = false;

            if (type == "glass" && !types.glass)
                can = false;

            if (dist == "+" && !types.plus)
                can = false;

            if (dist == "-" && !types.minus)
                can = false;

            if (can)
                nodes[i].style.display = "inline-block";
            else
                nodes[i].style.display = "none";
        }
    }
}

function clicked(value) {
    var el = document.getElementById(value);

    types[value] = !types[value];

    if (types[value])
        el.className = "type selected";
    else
        el.className = "type";

    filter();
}