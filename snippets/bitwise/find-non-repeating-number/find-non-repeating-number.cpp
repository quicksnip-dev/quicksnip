#include <vector>

int find_non_repeating(const std::vector<int> nums) {
    int result = 0;
    for (const int num : nums) {
        result ^= num;
    }
    return result;
}
