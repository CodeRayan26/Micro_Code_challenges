def custom_caesar_cipher_encrypt(message):
    def fibonacci(n):
        if n == 0: return 0
        elif n == 1: return 1
        a, b = 0, 1
        for _ in range(2, n + 1):
            a, b = b, a + b
        return b

    encrypted_message = []
    for i, char in enumerate(message):
        if char == ' ':
            encrypted_message.append(' ')
            continue
        

        shift = fibonacci(i) 
        new_char = chr(((ord(char) - ord('A') + shift) % 26) + ord('A'))
        encrypted_message.append(new_char)

    return ''.join(encrypted_message)


if __name__ == "__main__":
    original_message = "HELLO WORLDD"
    encrypted = custom_caesar_cipher_encrypt(original_message)
    print(encrypted);

