//Joshua Dalton
//IT 505

let players: string[] = []; //holds players

console.log("Football Roster");

let choice = "";

while (choice != "4") { //program runs until 4
    console.log("1. Add Player");
    console.log("2. Remove Player");
    console.log("3. View Players");
    console.log("4. Exit");

    choice = prompt("Choose:") || "";

    if (choice == "1") {
        let player = prompt("Enter player name:");

        if (player != null) {
            players.push(player); //adds player to array
        }
    }

    else if (choice == "2") {
        let player = prompt("Enter player name:");

        if (player != null) {
            let index = players.indexOf(player);

            if (index != -1) {
                players.splice(index, 1);
            }
        }
    }

    else if (choice == "3") {
        for (let player of players) {
            console.log(player);
        }
    }
}