#include <iostream> 
#include <vector>   

template <typename T>
std::ostream& operator<<(std::ostream& os, const std::vector<T>& vec) {
    os << "["; 
    for (size_t i = 0; i < vec.size(); ++i) {
        os << vec[i]; // Print each vector element
        if (i != vec.size() - 1) {
            os << ", "; // Add separator
        }
    }
    os << "]"; 
    return os; // Return the stream
}
