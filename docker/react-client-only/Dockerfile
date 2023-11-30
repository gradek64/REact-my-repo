

# prerequisites
# innstall and start your desktop docker app


### STEP1: IMAGE INFO SETUP TO BUILD IMAGE

#1 Install node image with node -v 16
FROM node:16


#1a this token is set in you shell script .bash or .zshrcf file and is assing to process.env.GITHUB_PACKAGES_AUTH_TOKEN
#ARG GITHUB_PACKAGES_AUTH_TOKEN
#ENV GITHUB_PACKAGES_AUTH_TOKEN=$GITHUB_PACKAGES_AUTH_TOKEN 

#2 Create docker app directory
WORKDIR /core

#3 A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

#4 run npm instal
RUN npm install

#5 Bundle app source except one set in .dockerignore
COPY . .

#(not listed job) EXPOSE keyword does not actually expose PORT outside is more for documentation still need to use flag for setting port
#EXPOSE 8080

#6 run app from package.json dev script
CMD [ "npm","run","dev" ]


### STEP 2: TO BUILD IMAGE

# docker build -t react-client-app . 

#WHAT the command means ?
# -t (tag) the app will be accessible by tag:react-client-app 
#. run build from current directory)

### STEP:3 (Optional) check your image/remove/

# after complete show all images

# docker image ls

# TO REMOVE this Image by its tag

# docker image rm react-client-app

# after complete show all images

# docker image ls


### STEP:4 RUN the docker  container

# TO RUN container from this Image (this will run but wont work in browser cause we need to expose port)

# docker run react-client-app




#1 TO RUN container with an exposed PORT -p, --port and detached mode (allows you to escape from bash command, otherwise
# is not possible to CTRL+C )

# this will run container in shell that wont be able to terminate, U need to got to docker desktop app and stop from there
# addvantage of running in the shell mode is to see all console.log so it is easier to debug it !


# docker run -d -p 8081:8081 react-client-app

#2 TO RUN container with an exposed PORT -p, --port and detached -rm removes conainer first (so it does not have to be stopped)

# docker run --rm -d -p 8081:8081 react-client-app


# STEP5: (optional) see all running container 

#docker ps 



# STEP6: STOP container running

# docker stop react-client-app
