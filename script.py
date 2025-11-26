total = 0
earned = 0
corrections_score = 0

def test_correction_calculator(total, earned, corrections_score):
    return ((((((total - earned) / 2) * corrections_score) + earned) / total) * 100)
