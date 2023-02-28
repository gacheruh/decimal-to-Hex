def decimal_to_hex(n):
    hexObj = {
        10: "A",
        11: "B",
        12: "C",
        13: "D",
        14: "E",
        15: "F"
    }
    hexadecimal = ''
    quot = n
    rem = 1
    while rem != 0:
        rem = quot % 16
        if rem >= 10:
            rem = hexObj[rem]
        hexadecimal = str(rem) + hexadecimal
        quot = quot // 16
    return hexadecimal or 0

print(decimal_to_hex(63))

#Alternatively
def dec_to_hex(n):
    hex_digits = "0123456789ABCDEF"
    hex_str = ''
    while n > 0:
        rem = n % 16
        hex_str = hex_digits[rem] + hex_str
        n = n // 16
    return hex_str or "0"

print(dec_to_hex(63))  # prints "3F"