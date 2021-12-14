module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['eslint-config-react-app', 'eslint-config-airbnb', 'eslint-config-prettier'],
    settings: {
        'import/resolver': {
            node: {
                moduleDirectory: ['node_modules', 'src/']
            }
        }
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 13,
        sourceType: 'module'
    },
    plugins: ['react', 'prettier'],
    rules: {
        'react/prop-types': 'off',
        'func-names': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/function-component-definition': 'off'
    }
};
