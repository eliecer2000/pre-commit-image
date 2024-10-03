# Utilizar una imagen base ligera de Python
FROM nikolaik/python-nodejs

# Instalar Git y otras dependencias necesarias
RUN apt-get update && apt-get install -y git curl

# Establecer el directorio de trabajo
WORKDIR /app

# Establecer variables de entorno para evitar problemas de permisos
ENV HOME=/tmp
ENV XDG_CACHE_HOME=/tmp/.cache

# Copiar el archivo de configuración de pre-commit dentro de la imagen
COPY .pre-commit-config.yaml /etc/pre-commit-config.yaml
COPY .editorconfig .
COPY .eslintrc.js .
COPY .prettierignore .
COPY .prettierrc.yaml .
COPY commitlint.config.js .
COPY eslint.config.js .


# Instalar pre-commit
RUN pip install --no-cache-dir pre-commit
RUN npm install -g aws-cdk
RUN cdk --version
RUN git init
RUN npx commitlint --version


# Instalar los hooks de pre-commit definidos en el archivo de configuración
RUN pre-commit install-hooks -c /etc/pre-commit-config.yaml

ENTRYPOINT ["pre-commit"]
