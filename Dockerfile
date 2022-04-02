FROM node:14.19-alpine3.15 as BUILDER

WORKDIR /usr/app

RUN apk update && apk add tzdata
ENV TZ America/New_York
ENV PATH /usr/app/node_modules/.bin:$PATH
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN apk update && apk add vim

COPY package.json package-lock.json ./

RUN npm install --silent
RUN npm install react-scripts -g --silent

COPY . .

RUN npm run build






FROM nginx:stable-alpine
COPY --from=BUILDER /usr/app/build /usr/share/nginx/html
COPY --from=BUILDER /usr/app/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]