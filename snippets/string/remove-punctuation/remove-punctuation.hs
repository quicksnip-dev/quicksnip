import Data.Char (isPunctuation)

removePunctuation :: String -> String
removePunctuation = filter (not . isPunctuation)
