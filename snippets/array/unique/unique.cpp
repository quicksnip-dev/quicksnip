#include <algorithm>
#include <vector>

bool removeDuplicates(std::vector<int> &input) noexcept {
    if (input.empty()) return false;
    const auto size = input.size();
    std::sort(input.begin(), input.end());

    auto last = std::unique(input.begin(), input.end()); // remove duplicates
    input.erase(last, input.end()); // resize vector and delete the undefined elements

    return size != input.size();
}
