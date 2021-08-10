FROM node:lts-alpine

WORKDIR /opt/project

COPY package*.json ./
RUN npm ci --only=production

COPY --chown=node:node . .

USER node

CMD [ "npm", "start" ]
