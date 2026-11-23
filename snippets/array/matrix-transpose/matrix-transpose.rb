def transpose_matrix(matrix)
    return [] if matrix.empty?
    return [] if matrix.first.empty?

    matrix.first.zip(*matrix[1..-1])
end
