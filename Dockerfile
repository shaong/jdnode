FROM node:boron

#Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
RUN cd /src; npm install

# Bundle app source

COPY . .

EXPOSE 8080
CMD ["npm", "start"]