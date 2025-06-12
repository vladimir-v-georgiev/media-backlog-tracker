import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        coverage: {
            enabled: true,
            provider: 'v8', // 'v8' is fast and built-in
            reporter: ['text', 'html', 'lcov'], // formats: console, browser, CI
            include: ['backend/**.ts'], // or your relevant folders
        },
    },
});