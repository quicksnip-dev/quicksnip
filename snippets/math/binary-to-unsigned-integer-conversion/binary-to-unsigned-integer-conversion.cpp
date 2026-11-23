#include <string>
#include <bitset>
#include <stdexcept>

template <std::unsigned_integral T>
T binary_to_uintegral(const std::string& binary) {
    if (binary.size() > sizeof(T) * 8)
        throw std::invalid_argument("binary string is too long");
    return static_cast<T>(std::bitset<sizeof(T) * 8>(binary).to_ullong());
}
