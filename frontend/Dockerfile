FROM node:lts AS reactDeploy
WORKDIR /frontendDir
COPY ./package.json .
RUN ["npm", "install"]

FROM node:lts
WORKDIR /frontendDir
COPY --from=reactDeploy /frontendDir/node_modules ./node_modules
COPY . .
EXPOSE 3000
CMD [ "npm", "start"]
