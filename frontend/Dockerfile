FROM node:lts AS reactDeploy

ENV CI=true
ENV PORT=3000

WORKDIR /frontendDir
COPY package.json /frontendDir/package.json
COPY package-lock.json /frontendDir/package-lock.json
RUN npm ci
COPY . /frontendDir

CMD [ "npm", "start" ]

# FROM reactDeploy as dev-envs
# RUN <<EOF
# apt-get update
# apt-get install -y --no-install-recommends git
# EOF

# RUN <<EOF
# useradd -s /bin/bash -m vscode
# groupadd docker
# usermod -aG docker vscode
# EOF

# COPY --from=gloursdocker/docker / /
# CMD [ "npm", "start" ]

# FROM reactDeploy AS reactBuild

# RUN npm run build

# FROM nginx:1.13-alpine

# COPY --from=reactBuild /frontendDir/build /usr/share/nginx/html