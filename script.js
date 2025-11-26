let total = 29
let earned = 26.67
let corrections_score = 5 / 6

function test_correction_calculator(total, earned, corrections_score){
    return ((((((total - earned) / 2) * corrections_score) + earned) / total) * 100)
}
