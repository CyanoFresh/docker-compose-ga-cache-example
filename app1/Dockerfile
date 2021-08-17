FROM node:lts-slim@sha256:86419100dc5376dd492552be338755c9ae20f578a18bfd97d5b351426a772f7f

WORKDIR /opt/project

COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

COPY --chown=node:node . .

USER node

CMD [ "npm", "start" ]
