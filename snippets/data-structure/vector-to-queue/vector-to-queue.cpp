#include<queue>
#include<vector>
#include<deque>

template <typename T>
std::queue<T> vectorToQueue(const std::vector<T>& v) {
    return std::queue<T>(std::deque<T>(v.begin(), v.end()));
}
