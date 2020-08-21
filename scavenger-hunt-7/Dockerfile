FROM ubuntu:20.04 AS build

RUN apt-get update -y && apt-get install -y gcc
COPY package/ /tmp/build
WORKDIR /tmp/build

RUN mkdir -p ctf_1.0-1/usr/local/bin
RUN gcc src.c -o ctf_1.0-1/usr/local/bin/ctf
RUN chmod 555 ctf_1.0-1/usr/local/bin/ctf

RUN dpkg-deb --build ctf_1.0-1

FROM ubuntu:20.04

RUN apt update && apt install -y openssh-server
RUN mkdir /var/run/sshd
RUN echo 'root:$(< /dev/urandom tr -cd "[:print:]" | head -c 32; echo)' | chpasswd

RUN sed -i 's/#LogLevel INFO/LogLevel VERBOSE/' /etc/ssh/sshd_config
RUN sed -i 's/#PubkeyAuthentication yes/PubkeyAuthentication no/' /etc/ssh/sshd_config
RUN sed -i 's/X11Forwarding yes/X11Forwarding no/' /etc/ssh/sshd_config
RUN echo "AllowUsers ctf" >> /etc/sshd_config
RUN sed -i 's/session\s*required\s*pam_loginuid.so/session optional pam_loginuid.so/g' /etc/pam.d/sshd
RUN sed -i 's/session\s*optional\s*pam_motd.so/#/g' /etc/pam.d/sshd

ENV NOTVISIBLE "in users profile"
RUN echo "export VISIBLE=now" >> /etc/profile

RUN useradd --create-home --shell /bin/bash ctf
RUN echo 'ctf:camp2020-252717' | chpasswd
RUN passwd ctf --mindays 9999

RUN touch /home/ctf/.hushlogin
RUN chown -R ctf:ctf /home/ctf
RUN chmod -w -R /home/ctf

WORKDIR /tmp
COPY --from=build /tmp/build/ctf_1.0-1.deb .
RUN apt install ./ctf_1.0-1.deb
RUN rm ./ctf_1.0-1.deb

RUN chmod -x /usr/bin/ssh*

EXPOSE 22
CMD ["/usr/sbin/sshd", "-D", "-e"]
