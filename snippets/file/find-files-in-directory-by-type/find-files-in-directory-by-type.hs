import System.Directory (listDirectory)
import System.FilePath (takeExtension)

findFilesByExtension :: FilePath -> String -> IO [FilePath]
findFilesByExtension dir ext = do
    files <- listDirectory dir
    return $ filter (\f -> takeExtension f == ext) files
