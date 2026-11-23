#include <ranges>
#include <string>

template <typename P>
std::string filter(const std::string& str, P&& predicate) {
    return str
        | std::ranges::views::filter(std::forward<P>(predicate))
        | std::ranges::to<std::string>();
}
