def truncate(s:str, length:int, suffix:bool = True) -> str :
    return (s[:length] + ("..." if suffix else "")) if len(s) > length else s
