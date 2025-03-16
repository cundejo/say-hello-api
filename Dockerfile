FROM node:22-alpine

RUN corepack enable && corepack prepare pnpm@9.1.2 --activate

WORKDIR /say-hello-api

# Install dependencies
COPY ./package.json .
COPY ./pnpm-lock.yaml .
RUN pnpm i

# Build
COPY ./tsconfig.json .
COPY ./src ./src
RUN pnpm build

# Start
CMD ["node", "dist/index.js"]