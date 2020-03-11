#specify base image
#alpine gives you minimum programs
FROM node:alpine

#make a working directory in container
WORKDIR /usr/myApp

#copy local files to docker container
COPY ./package.json ./

#install dependencies
RUN npm install 

COPY ./ ./


#setup default command
CMD ["npm", "start"]