#include <ranges>
#include <vector>

template <typename T, typename F>
auto transform(const std::vector<T>& vec, F&& transformer) {
    using U = std::invoke_result_t<F, T>;
    return vec
        | std::views::transform(std::forward<F>(transformer))
        | std::ranges::to<std::vector<U>>();
}
