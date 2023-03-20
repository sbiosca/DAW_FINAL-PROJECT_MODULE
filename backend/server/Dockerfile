
FROM --platform=$BUILDPLATFORM python:3.10.7 AS pythonDeploy
EXPOSE 8000
WORKDIR /server
COPY requirements.txt /server
RUN pip install -r requirements.txt --no-cache-dir
COPY . /server
ENTRYPOINT ["python3"] 
CMD ["manage.py", "runserver", "0.0.0.0:8000"]

# FROM pythonDeploy as venv
# RUN <<EOF
# apt-get update
# apt-get add git
# EOF

# RUN <<EOF
# addgroup -S docker
# adduser -S --shell /bin/bash --ingroup docker vscode
# EOF
# COPY --from=gloursdocker/docker / /
# CMD ["manage.py", "runserver", "0.0.0.0:8000"]