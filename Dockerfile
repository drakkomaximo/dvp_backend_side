FROM node:14

RUN apt-get update && apt-get install -y default-mysql-client

WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install

COPY . /app/
COPY wait-for-mysql.sh /wait-for-mysql.sh
RUN chmod +x /wait-for-mysql.sh

EXPOSE 3000

CMD /wait-for-mysql.sh mysqldb:3306 npm start
