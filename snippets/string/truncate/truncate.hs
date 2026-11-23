truncateString :: Int -> String -> String
truncateString maxLength str
    | length str <= maxLength = str
    | otherwise = take (maxLength - 3) str ++ "..."
