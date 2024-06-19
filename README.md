# Dummy Commands

This project, named "dummy-commands", is a modern interpretation of classic Linux commands. It aims to provide a new and innovative way to interact with command-line utilities, making them more accessible and easier to use in various programming environments.

## Description

"dummy-commands" is designed to reimplement traditional Linux commands with a focus on simplicity and modern coding standards. This project is perfect for developers looking for an alternative way to utilize command-line tools within their applications or for educational purposes to understand how these commands work under the hood.

## Features

- **Modern Linux Commands**: Includes modern versions of classic commands like `ls` and `cat`.
- **Easy Integration**: Designed to be easily integrated into Node.js projects.
- **Lightweight Dependencies**: Utilizes minimal dependencies to keep the project lightweight and fast.

## Usage
The project includes several scripts to run the commands directly:

- **Start**: Runs the main application.
  ```sh
  npm run start
  ```
- **dls**: Executes the modern `ls` command.
  ```sh
  npm run dls
  ```
- **dcat**: Executes the modern `cat` command.
  ```sh
  npm run dcat
  ```

## Dependencies

- `cli-highlight`: Used for syntax highlighting in the terminal.
- `picocolors`: Provides color support for terminal text.

## Development

This project uses `standard` for linting. Ensure you have all the development dependencies installed before making changes:

```sh
pnpm install
```

## License

This project is licensed under the ISC License. See the LICENSE file for more details.
