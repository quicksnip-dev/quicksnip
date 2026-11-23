#include <filesystem>
#include <vector>
#include <string>

template <typename P>
std::vector<std::filesystem::path> find_files(const std::string& path, P&& predicate) {
    std::vector<std::filesystem::path> files;
    std::error_code ec;

    if (!std::filesystem::exists(path, ec) || ec)
        return files;
    if (!std::filesystem::is_directory(path, ec) || ec)
        return files;

    auto it = std::filesystem::directory_iterator(path, ec);
    if (ec)
        return files;

    for (const auto& entry : it)
        if (!std::filesystem::is_directory(entry) && predicate(entry.path()))
            files.push_back(entry.path());

    return files;
}
