fn read_lines(file_name: &str) -> std::io::Result<Vec<String>>
    Ok(
        std::fs::read_to_string(file_name)?
            .lines()
            .map(String::from)
            .collect()
    )
}
