export default {
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        '^.+\\.ts?$': 'ts-jest'
    },
    globalSetup: '<rootDir>/jest-setup.ts'
};
