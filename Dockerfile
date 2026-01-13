FROM node:24-alpine AS build
WORKDIR /app
COPY . .
RUN corepack enable pnpm && pnpm install && pnpm build

FROM node:24-alpine AS product
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./package.json
RUN corepack enable pnpm && pnpm install --prod
CMD ["node", "dist/index.js"]