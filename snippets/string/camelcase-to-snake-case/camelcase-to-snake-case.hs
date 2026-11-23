import Data.Char (isUpper, toLower)

camelToSnake :: String -> String
camelToSnake [] = []
camelToSnake (x:xs)
    | isUpper x = '_' : toLower x : camelToSnake xs
    | otherwise = x : camelToSnake xs
