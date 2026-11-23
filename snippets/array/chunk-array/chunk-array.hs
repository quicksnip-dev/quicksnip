chunkArray :: Int -> [a] -> [[a]]
chunkArray _ [] = []
chunkArray n xs = take n xs : chunkArray n (drop n xs)
