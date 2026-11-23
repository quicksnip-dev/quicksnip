import Data.Char (toUpper)

capitalizeWords :: String -> String
capitalizeWords = unwords . map capitalize . words
  where
    capitalize []     = []
    capitalize (x:xs) = toUpper x : xs
