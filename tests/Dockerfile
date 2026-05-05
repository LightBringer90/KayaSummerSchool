FROM mcr.microsoft.com/playwright:v1.47.2-jammy

WORKDIR /tests
COPY package.json ./
RUN npm install --no-audit --no-fund
COPY playwright.config.ts smoke.spec.ts ./

CMD ["npx", "playwright", "test"]
