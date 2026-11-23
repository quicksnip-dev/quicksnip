safeDiv :: Int -> Int -> Either String Int
safeDiv _ 0 = Left "Division by zero error"
safeDiv x y = Right (x `div` y)
