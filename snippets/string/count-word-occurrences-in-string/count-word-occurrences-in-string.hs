import Data.List (group, sort)

countWordOccurrences :: String -> [(String, Int)]
countWordOccurrences = map (\(w:ws) -> (w, length (w:ws))) . group . sort . words
