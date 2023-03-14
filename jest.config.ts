export default {
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        '^.+\\.ts?$': 'ts-jest'
    },
    testEnvironment: 'jsdom',
    globalSetup: '<rootDir>/jest-setup.ts'
};
