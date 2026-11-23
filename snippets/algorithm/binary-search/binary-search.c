int binarySearch(int arr[], int low, int high, int x) {
  while (low <= high) {
    int mid = low + (high - low) / 2;

    // Check if x is present at mid
    if (arr[mid] == x) {
      return mid;
    }

    // If x is smaller, search the left half
    if (arr[mid] > x) {
      high = mid - 1;
    } else { // If x is larger, search the right half
      low = mid + 1;
    }
  }
  return -1; // Element not found
}
