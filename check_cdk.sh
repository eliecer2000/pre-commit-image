#!/bin/bash

# Ruta al archivo cdk.json
FILE="./cdk.json"

# Verificar si el archivo cdk.json existe
if [ -f "$FILE" ]; then
  echo "El archivo $FILE existe. Ejecutando el comando..."
  # Ejecutar el comando npx cdk --version
  cdk synth --all
else
  # Si el archivo no existe, no hace nada
  echo "El archivo $FILE no existe. No se ejecutará nada."
fi
