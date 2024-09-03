let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];

let result = document.getElementById("result");

function calculateAge() {
    let birthDate = new Date(userInput.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear(); // Corrected from getYear to getFullYear

    let today = new Date();

    let d2 = today.getDate(); // Corrected to use today's date
    let m2 = today.getMonth() + 1; // Corrected to use today's month
    let y2 = today.getFullYear(); // Corrected to use today's year

    let d3, m3, y3;
    y3 = y2 - y1;

    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonth(y2, m2 - 1) + d2 - d1; // Fixed incorrect reference to month and year
    }

    if (m3 < 0) {
        m3 = 11;
        y3--;
    }

    result.innerHTML = `You are ${y3} years, ${m3} months, and ${d3} days old.`; // Fixed string interpolation and corrected months to plural
}

function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate(); // Corrected month reference for accurate days
}
