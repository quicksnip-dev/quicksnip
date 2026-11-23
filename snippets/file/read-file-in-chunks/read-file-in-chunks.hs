import System.IO (openFile, IOMode(ReadMode), hGetContents)
import Data.List (unfoldr)

readFileInChunks :: FilePath -> Int -> IO [[String]]
readFileInChunks filePath chunkSize = do
    handle <- openFile filePath ReadMode
    contents <- hGetContents handle
    let linesList = lines contents
    return $ go linesList
  where
    go [] = []
    go xs = take chunkSize xs : go (drop chunkSize xs)
