import Control.Monad.State

increment :: State Int Int
increment = do
    count <- get
    put (count + 1)
    return count
