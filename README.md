# Pre-Commit Image

Este proyecto proporciona una forma sencilla de ejecutar **pre-commit** en un contenedor Docker, sin necesidad de instalar Python, pre-commit, ni las dependencias localmente en tu máquina. Esto permite que el entorno de desarrollo sea más ligero y estandarizado, independientemente de las configuraciones locales de los desarrolladores.

## Descripción del Proyecto

El proyecto **Pre-Commit Image** está diseñado para que los equipos puedan ejecutar **pre-commit hooks** utilizando Docker. Esto elimina la necesidad de configurar o mantener las dependencias necesarias para usar pre-commit, como Python, en la máquina local. Simplemente con un solo comando, los usuarios podrán instalar el entorno necesario y ejecutar los hooks preconfigurados.

### Características:

- **No necesitas instalar Python ni pre-commit** en tu sistema local.
- **Compatible con Docker**: todo corre dentro de un contenedor.
- **Instalación sencilla**: con un solo comando, estarás listo para ejecutar los hooks.
- **Soporte para Conventional Commits**: compatible con el estándar **Conventional Commits** y permite incluir referencias a issues de **Jira** en los mensajes de commit.

### Instalación

Para instalar el script que configura los hooks pre-commit en tu proyecto, solo necesitas ejecutar el siguiente comando en tu terminal:

```bash
curl -s https://raw.githubusercontent.com/eliecer2000/pre-commit-image/master/install-hooks.sh | bash
```

Este comando descargará y ejecutará automáticamente el script `install-hooks.sh`, que configurará los hooks pre-commit en tu entorno de desarrollo utilizando Docker.

### Uso

Después de instalar los hooks con el comando anterior, podrás ejecutar **pre-commit** simplemente al hacer un commit. El contenedor Docker se encargará de ejecutar los hooks sin que tengas que preocuparte por las dependencias locales.

#### Commit Message Convenciones:

Este proyecto sigue las convenciones de [**Conventional Commits**](https://www.conventionalcommits.org/) para estructurar los mensajes de commit. Asegúrate de seguir estas reglas al crear tus commits, incluyendo referencias a los issues de **Jira** cuando sea necesario.

- **feat**: Para nuevas características.
- **fix**: Para correcciones de errores.
- **chore**: Para tareas de mantenimiento o configuraciones que no cambian el comportamiento del código.
- **refactor**: Para refactorizaciones sin cambios visibles.

Ejemplo de un mensaje de commit convencional con referencia a un issue de Jira:

```
feat: add new pre-commit hook for linting [JIRA-123]
```

### Contribución

Si deseas contribuir a este proyecto, por favor sigue estas pautas:

1. Asegúrate de seguir las convenciones de commit descritas anteriormente.
2. Crea un **fork** del repositorio.
3. Envía un **pull request** para revisar tus cambios.

### Licencia

Este proyecto está bajo la [Licencia MIT](LICENSE).
