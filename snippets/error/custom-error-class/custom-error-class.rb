class MyCustomError < StandardError; end

def risky_method(value)
    raise MyCustomError, "Value must be positive" if value <= 0
    "Valid value: #{value}"
end
