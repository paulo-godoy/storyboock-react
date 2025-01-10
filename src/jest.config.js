module.exports = {
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
    "^@hooks/(.*)$": "<rootDir>/src/hook/$1",
  },
  //   transformIgnorePatterns: [
  //     "<rootDir>/node_modules/(?!axios)", // Exclui o axios da lista de ignore
  //   ],
};
