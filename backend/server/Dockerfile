FROM --platform=$BUILDPLATFORM python:3.10.7 AS pythonDeploy
WORKDIR /server
COPY ./package.json ./package.json
EXPOSE 8000
COPY requirements.txt /server
RUN pip install -r requirements.txt --no-cache-dir
COPY . /server
ENTRYPOINT ["python3"] 
CMD [
    "manage.py", "migrate"
    "manage.py", "runserver", "0.0.0.0:8000"
    ]
