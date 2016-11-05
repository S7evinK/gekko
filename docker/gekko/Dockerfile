FROM alpine:3.4
MAINTAINER S7evinK

# Create user
RUN addgroup gekko -g 1234 && \
    adduser -D gekko -G gekko -u 1234

# Install prerequisites
RUN apk add --no-cache \
    nodejs \
    git \
    build-base \
    python

# Clone gekko & install
ARG REPOSITORY
ARG ADDITIONAL_PACKAGES
ARG BRANCH
USER gekko
RUN cd /home/gekko/ && \
    git clone -b $BRANCH $REPOSITORY && \
    cd gekko && \
    npm install && \
    npm install $ADDITIONAL_PACKAGES && \
    mkdir history

# remove build-base
USER root
RUN apk del \
    build-base \
    python \
    git

# set workdir & switch user
WORKDIR /home/gekko/gekko
USER gekko

# Command to execute on start
CMD ["node", "gekko.js"]
