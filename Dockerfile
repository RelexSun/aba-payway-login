FROM node:20.11.1

# Declaring all arg to use for env in build time
ARG NEXT_PUBLIC_NODE_ENV
ARG NEXT_PUBLIC_API_URL
ARG NEXT_PUBLIC_JWT_REFRESH_TOKEN_SECRET
ARG NEXT_PUBLIC_JWT_ACCESS_TOKEN_SECRET

# Set environment variables
ENV NEXT_PUBLIC_NODE_ENV=$NEXT_PUBLIC_NODE_ENV
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_JWT_REFRESH_TOKEN_SECRET=$NEXT_PUBLIC_JWT_REFRESH_TOKEN_SECRET
ENV NEXT_PUBLIC_JWT_ACCESS_TOKEN_SECRET=$NEXT_PUBLIC_JWT_ACCESS_TOKEN_SECRET

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install

# Copying source files
COPY . .

# Declaring all arg to use for env in build time (create ENV vairables during build time)


# Declaring env from the arg value (mapping Deployment ENV to built image ENV)

# Building app
RUN yarn build

# Running the app
CMD [ "yarn", "start" ]