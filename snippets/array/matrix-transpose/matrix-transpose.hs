transposeMatrix :: [[a]] -> [[a]]
transposeMatrix [] = []
transposeMatrix ([]:_) = []
transposeMatrix xs = map head xs : transposeMatrix (map tail xs)
