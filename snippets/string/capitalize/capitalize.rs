fn capitalized(str: &str) -> String {
    let mut chars = str.chars();
    match chars.next() {
        None => String::new(),
        Some(f) => f.to_uppercase().chain(chars).collect(),
    }
}
