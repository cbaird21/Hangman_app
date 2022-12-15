// fetch high scores api and print to list items
// maybe add button to view by username

function renderHighScore() {
    $.ajax({
        url: "/api/highscores",
        method: "GET",
    }).then(function (response) {
        console.log(response);
    })
};

renderHighScore();
