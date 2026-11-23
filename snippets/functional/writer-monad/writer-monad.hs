import Control.Monad.Writer

addAndLog :: Int -> Int -> Writer [String] Int
addAndLog x y = do
    tell ["Adding " ++ show x ++ " and " ++ show y]
    return (x + y)
