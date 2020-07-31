import os
import random
import string

flag = "camp{h1dd3n_1n_4_5e4_0f_t3xt}"
letters = string.ascii_letters + string.ascii_letters + string.digits + "_-?!{}"
random_string = lambda: "".join(random.choice(letters) for _ in range(len(flag))) + "\n"
num_lines = 5000

out = [random_string() for _ in range(num_lines)]
out += [flag + "\n"]
random.shuffle(out)

file = os.path.join("/home/ctf/ctf" if os.path.exists("/home/ctf/ctf") else "", "file.txt")

with open(file, "w") as f:
    f.writelines(out)

