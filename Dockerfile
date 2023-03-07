# Dockerfile

# base image
FROM node:18-alpine

# set working directory
WORKDIR /usr/src

# install global dependencies
RUN npm install -g @nestjs/cli

# copy files to docker directory
COPY . .

# install application dependencies
RUN npm install

# build application
RUN npm run start

EXPOSE 3000

# run application
CMD ["node", "dist/main"]
