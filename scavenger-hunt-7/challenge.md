# Name
Scavenger Hunt 7

## Description
Computers are really boring when you only have files and users.
You need programs to spice things up!
That's why I've written a `ctf` program; just type in `ctf` on the server!
What does it do?
Well, I would give you the package description, but I seem to have lost it...

## Flag
camp{4pt_g3t_1s_0u7d4teD_us3_4pt_1n5t3aD}

## Points
250

## Category
Miscellaneous

## Hints
* "Package"? What does that mean?
* How does Linux manage packages?
* How does *Ubuntu* manage packages?
* How can you get Ubuntu to give you the package description?

## Name
Edward Feng

## Solvepath
If we try running `ctf`, we don't get the flag.
The problem mentioned "packages" and "package descriptions", so let's take a look at that.

`apt` is the Debian/Ubuntu package manager.
If we run `apt` without any arguments, it'll give us the following list:
```
Most used commands:
  list - list packages based on package names
  search - search in package descriptions
  show - show package details
  install - install packages
  reinstall - reinstall packages
  remove - remove packages
  autoremove - Remove automatically all unused packages
  update - update list of available packages
  upgrade - upgrade the system by installing/upgrading packages
  full-upgrade - upgrade the system by removing/installing/upgrading packages
  edit-sources - edit the source information file
  satisfy - satisfy dependency strings
```

* If we run `apt list`, we'll get a huge list of packages.
  This actually gives us *all* the packages that we can install with `apt`, which isn't too helpful.
* We can run `apt list --installed` to get a slightly more manageable list of the installed packages.
  You'll see the `ctf` package is listed towards the top.
* Alternatively, you can run `apt search ctf`, which will also give us the `ctf` package.

In any case, we now know the package name, which will let us get the description.
Packages come with a bunch of metadata, which we can show with `apt show`.
In our case, we want `apt show ctf`, which will give us the package description, which has our flag.
