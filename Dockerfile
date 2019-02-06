FROM node:8.12.0-alpine
RUN apk --update add vim && rm -rf /var/cache/apk/*

EXPOSE 1234

CMD ["node", "/main/server.js"]
