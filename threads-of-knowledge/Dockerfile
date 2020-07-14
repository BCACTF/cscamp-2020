FROM ubuntu:18.04

RUN apt-get update -y && apt-get install -y lib32z1 xinetd gcc && rm -rf /var/lib/apt/lists/*

RUN useradd -m ctf

WORKDIR /home/ctf

COPY . /home/ctf/
RUN gcc src.c -o threads-of-knowledge
