#Instala um servidor linux com node versão lts
FROM node:lts-alpine

#cria a basta base chamada app
RUN mkdir /app

#Determina a pasta app como local de trabalho
WORKDIR /app

#Copia todos os elementos no aquivo package 
COPY package.json .

#instala todas as dependencias necessaria para roda o projeto
RUN yarn
#copia todos os aqurivo com ponto
COPY . .

#indica a porta de uso
EXPOSE 3000
#recutar o app  na pasta dist
CMD ["yarn","dev"]