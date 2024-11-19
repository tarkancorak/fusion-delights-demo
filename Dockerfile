# Basis-Image
FROM node:18

# Arbeitsverzeichnis setzen
WORKDIR /usr/src/app

# Kopiere package.json und package-lock.json und installiere Abhängigkeiten
COPY package.json package-lock.json ./
RUN npm install

# Kopiere den Rest der Anwendung
COPY . .

# Baue die Anwendung
RUN npm run build

# Port konfigurieren und App starten
ENV PORT=8080
EXPOSE 8080

# Standardstartbefehl
CMD ["npm", "run", "start"]
