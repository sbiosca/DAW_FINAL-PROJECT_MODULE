FROM node:lts AS reactDeploy

ENV CI=true
ENV PORT=3000

WORKDIR /frontendDir
COPY package.json /frontendDir/package.json
COPY package-lock.json /frontendDir/package-lock.json
RUN npm ci
COPY . /frontendDir
CMD [ "npm", "start", "npm", "i" ]
