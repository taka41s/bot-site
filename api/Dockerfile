# Base image
FROM elixir:1.14.0-alpine AS build

# Set working directory
WORKDIR /app

# Install build dependencies
RUN apk add --no-cache inotify-tools
RUN apk add --update --no-cache bash build-base postgresql-dev

# Install Hex package manager and Rebar
RUN mix local.hex --force && \
    mix local.rebar --force

# Copy the mix.exs and mix.lock files to install dependencies
# Install dependencies
# RUN mix deps.clean --all
COPY . .

RUN mix deps.get 
RUN mix deps.compile

# Copy the rest of the application code


# Set the environment to development
ENV MIX_ENV=dev

# Expose the necessary port(s)
EXPOSE 4000

