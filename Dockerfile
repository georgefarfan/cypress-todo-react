FROM cypress/base:16.13.0

COPY . .

RUN npm install
RUN npm run start
RUN npm run cy:run