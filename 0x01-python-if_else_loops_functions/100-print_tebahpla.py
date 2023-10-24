#!/usr/bin/python3

""" i = 0
for c in range(ord('z'), ord('a') - 1, -1):
    print("{}".format(chr(c - i)), end="")
    i = 32 if i == 0 else 0 """
for t in range(122, 96, -1):
    if t % 2 != 0:
        print("{}".format(chr(t - 32)), end="")
    else:
        print("{}".format(chr(t)), end="")
