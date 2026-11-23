#include <ranges>
#include <string>

template <typename F>
std::string transform(const std::string& str, F&& transformer) {
    return str
        | std::ranges::views::transform(std::forward<F>(transformer))
        | std::ranges::to<std::string>();
}
