# syntax=docker/dockerfile:1

# 本地开发：与 docker-compose 中的 dev 服务一起使用
FROM node:22-bookworm-slim AS development

WORKDIR /app

ENV npm_config_update_notifier=false

COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

EXPOSE 5173

ENTRYPOINT ["/docker-entrypoint.sh"]

# 生产构建 + Nginx 托管静态文件
FROM node:22-bookworm-slim AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:1.27-alpine AS production

COPY docker/nginx-default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
