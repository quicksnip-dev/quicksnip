def read_file_in_chunks(filepath, chunk_size):
    with open(filepath, 'r') as file:
        while chunk := file.read(chunk_size):
            yield chunk
