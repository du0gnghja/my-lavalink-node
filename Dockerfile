FROM ghcr.io/lavalink-devs/lavalink:4.0.8

# BẮT BUỘC phải có dòng này để Lavalink nhận mật khẩu duongnghia1710 từ application.yml
COPY application.yml /opt/Lavalink/application.yml

EXPOSE 2333
