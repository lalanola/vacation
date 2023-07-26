let schedule = ["ooooxooo", "oxxoxoxo", "oxxxoxoo"];

// let last_schedule = false;
let consecutive_vacation = 0;
let max_vacation = 0;
for (let i = 0; i < schedule[0].length; i++) {
  if (schedule[0][i] == "o" && schedule[1][i] == "o" && schedule[2][i] == "o") {
    consecutive_vacation++;
  } else {
    if (max_vacation < consecutive_vacation) {
      max_vacation = consecutive_vacation;
    }
    consecutive_vacation = 0;
  }
}

console.log(max_vacation);