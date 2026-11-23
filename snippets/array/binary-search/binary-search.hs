binarySearch :: Ord a => a -> [a] -> Maybe Int
binarySearch _ [] = Nothing
binarySearch target xs = go 0 (length xs - 1)
  where
    go low high
        | low > high = Nothing
        | midElem < target = go (mid + 1) high
        | midElem > target = go low (mid - 1)
        | otherwise = Just mid
      where
        mid = (low + high) `div` 2
        midElem = xs !! mid
