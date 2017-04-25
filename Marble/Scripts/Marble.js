let addToList = (data) => {
    $("#marbleList")
        .append($("<li>").html(data.Name))
}

let addToListTwo = (data) => {
    $("#marbleList2")
        .append($("<li>").html(data.Name))
}

let GetRandomMarble = () => {
    $.ajax({
        url: '/api/Marble',
        dataType: "json",
        success: (data) => {
            data.map((item) => { addToList(item); });
        }
    });
}

let AddMarble = () => {
    let newMarble = {
        Color: $("#newMarbleColor").val()
    };

    $.ajax({
        url: '/api/Marble',
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(newMarble),
        type: "POST",
        success: (data) => {
            addToListTwo(data);
        },
        error: (data) => {
            console.log("oops", data)
        },
        complete: (data) => {
            console.log("done", data);
        }
    });
}