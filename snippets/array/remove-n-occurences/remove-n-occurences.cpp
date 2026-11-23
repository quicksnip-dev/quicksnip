#include <algorithm>
#include <unordered_map>
#include <vector>

bool removeOccurrences(std::vector<int>& vec, const unsigned int n) noexcept {
    if (vec.empty() || n == 0) return false;

    const auto size = vec.size();
    std::unordered_map<int, int> frequency; // count frequencies
    for (int num : vec) {
        frequency[num]++;
    }

    vec.erase( // remove elements with n number of occurrences
        std::remove_if(vec.begin(), vec.end(), [&frequency, n](const int x) {
            return frequency[x] == n;
        }),
        vec.end()
    );
    return size != vec.size();
}
