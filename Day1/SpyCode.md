# Challenge: Spy Code Extraction

## Challenge Level : Easy


## Description
Problem: You are a secret agent working for the Palestinian Resistance decoding a classified message to identify the enemy helping mossad. The input is a string containing two or more words. Your task is to find the intersection of characters between the first and last word of the string, remove those characters from the first word, and return the result.

The characters should be removed only from the first word, preserving the remaining characters in their original order. The intersection should be case-sensitive.

Input:
A string S containing two or more words, separated by spaces. Each word consists of lowercase or uppercase alphabetical characters, and no punctuation. The length of S is between 1 and 100 characters.

Output:
A string representing the first word with the intersection characters (from the first and last word) removed.

Rules:
Identify the characters that are common between the first and last word.
Remove all occurrences of these characters from the first word.
The case of the letters must be preserved (i.e., A is not the same as a).
If no common characters are found, return the first word unchanged.


## example random:

Input:
"lain sent a mail"

Output:
"ai"

## Explanation:
Longest common sub-string between lain and the rest is (ai) from Mail

