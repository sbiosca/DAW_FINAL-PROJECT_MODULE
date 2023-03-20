
FROM --platform=$BUILDPLATFORM python:3.10.7 AS pythonDeploy
EXPOSE 8000
WORKDIR /server
RUN pip install -r django
RUN pip install -r environs
COPY . /server
ENTRYPOINT ["python3"] 
CMD ["manage.py", "runserver", "0.0.0.0:8000"]

FROM pythonDeploy as venv
RUN <<EOF
apk update
apk add git
EOF

RUN <<EOF
addgroup -S docker
adduser -S --shell /bin/bash --ingroup docker vscode
EOF
COPY --from=gloursdocker/docker / /
CMD ["manage.py", "runserver", "0.0.0.0:8000"]