# Creating my first Docker file 
FROM nginx:alpine
COPY . /usr/share/nginx/html
