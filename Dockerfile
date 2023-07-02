# syntax=docker/dockerfile:1
FROM python:3.12.0a7-alpine3.17
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
WORKDIR /code
COPY requirements.txt /code/

RUN \
 apk add --no-cache  gcc musl-dev && \
 python3 -m pip install -r requirements.txt --no-cache-dir

RUN apk add bash

COPY . /code/
