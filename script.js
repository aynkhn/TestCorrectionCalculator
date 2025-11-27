function roundToDecimalPlaces(num, places) {
    const factor = Math.pow(10, places);
    return Math.round(num * factor) / factor;
}

function test_correction_calculator(total, earned, corrections_score){
    return ((((((total - earned) / 2) * corrections_score) + earned) / total) * 100) // find new score after corrections
}

function compute() {
    let earned = Number(document.getElementById("ES").value) // read input values of "x" and get values
    let total = Number(document.getElementById("TP").value)
    let corrections_score = (Number(document.getElementById("SC").value) / 100)
    
    let new_score = 0

    if (total === 0) {
        new_score = "Error: points can't be zero. Oooooo shoot."
    } else {
        let full_new_score = test_correction_calculator(total, earned, corrections_score)
        new_score = roundToDecimalPlaces(full_new_score, 8)
    }

    if (typeof new_score === "number") {
        document.getElementById("output").innerText = new_score + "%"
    } else {
        document.getElementById("output").innerText = new_score
    }
    
}
