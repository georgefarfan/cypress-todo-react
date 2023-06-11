FROM cypress/base:16.13.0

ENV HOME /app/.cache
ENV CYPRESS_CACHE_FOLDER /app/.cache

COPY . .

RUN npm install
RUN npm run start
RUN npm run cy:run