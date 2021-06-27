FROM j1mc/docker-zola:latest AS builder
COPY . /build
WORKDIR /build
RUN	["zola", "build"]

FROM sebp/lighttpd:latest
COPY --from=builder /build/public /var/www/localhost/htdocs