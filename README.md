# Project Setup

## Dependencies

To set up the project dependencies, you need to install the following packages:

- `eslint`
- `prettier`
- `eslint-plugin-prettier`
- `eslint-config-prettier`
- `typescript`
- `@typescript-eslint/eslint-plugin`

## Installation

Run the following command to install the dependencies:

```bash
npm install eslint prettier eslint-plugin-prettier eslint-config-prettier typescript @typescript-eslint/eslint-plugin --save-dev
```

## Configuration

### ESLint

Create a `.eslintrc.json` file in the root of your project and add the following configuration:

```json
{
    "parser": "@typescript-eslint/parser",
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended"
    ],
    "plugins": ["@typescript-eslint", "prettier"],
    "rules": {
        "prettier/prettier": "error"
    }
}
```

### Prettier

Create a `.prettierrc` file in the root of your project and add the following configuration:

```json
{
    "singleQuote": true,
    "trailingComma": "all",
    "printWidth": 80
}
```

### TypeScript

Create a `tsconfig.json` file in the root of your project and add the following configuration:

```json
{
    "compilerOptions": {
        "target": "ES6",
        "module": "commonjs",
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules"]
}
```

## Usage

To lint your code, run:

```bash
npx eslint .
```

To format your code, run:

```bash
npx prettier --write .
```