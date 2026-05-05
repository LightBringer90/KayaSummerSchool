FROM node:20-alpine

WORKDIR /app

# Cache deps in their own layer
COPY package.json ./
RUN npm install --no-audit --no-fund

# App sources
COPY tsconfig.json next.config.js postcss.config.js tailwind.config.ts next-env.d.ts .eslintrc.json ./
COPY src ./src
COPY public ./public

EXPOSE 3000
ENV HOST=0.0.0.0
ENV PORT=3000
ENV NEXT_TELEMETRY_DISABLED=1

CMD ["npm", "run", "dev"]
