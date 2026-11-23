import Data.Char (toUpper)

snakeToCamel :: String -> String
snakeToCamel [] = []
snakeToCamel ('_':x:xs) = toUpper x : snakeToCamel xs
snakeToCamel (x:xs) = x : snakeToCamel xs
