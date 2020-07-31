import os
import random
import string

flag = "k89sg4mcamp{7h4t5_4_l0tt4_f1l3s}"
letters = string.ascii_letters + string.ascii_letters + string.digits + "____-?!{}"
random_string = lambda: "".join(random.choice(letters) for _ in range(len(flag)))
num_files = 5000

file_dir = "/home/ctf/ctf" if os.path.exists("/home/ctf/ctf") else "./challenge"
if not os.path.exists(file_dir):
    os.makedirs(file_dir)

create_file = lambda x: open(os.path.join(file_dir, x), "w").close()

create_file(flag)
for _ in range(num_files):
    create_file(random_string())
