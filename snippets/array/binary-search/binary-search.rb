def binary_search(array, target)
  low = 0
  high = array.length - 1

  while low <= high
    mid = (low + high) / 2
    guess = array[mid]

    if guess == target
      return mid
    elsif guess > target
      high = mid - 1
    else
      low = mid + 1
    end
  end

  return nil
end
