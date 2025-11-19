# Quiz Native

Quiz Native is a React Native CLI application that demonstrates a Gemini-powered quiz experience with Firebase integration hooks. The current build ships with static screens that outline the target experience while backend wiring is implemented.

## Features

- Landing hub that links to practice quizzes and Gemini chat
- Static daily quiz flow with scoring and retry support
- Mock Gemini chat interface prepared for API integration
- React Navigation stack setup with reusable UI components

## Requirements

- Node.js 20+
- Android Studio / Xcode (depending on platform)
- Watchman (macOS) and Java 17 for Android builds

## Installation

```sh
npm install
```

## Development Workflow

1. Start Metro in one terminal:

	```sh
	npm start
	```

2. With Metro running, build and launch:

	- **Android**: `npm run android`
	- **iOS**: `npm run ios`

	> For iOS, run `bundle install` once and `bundle exec pod install` after native dependency changes.

## Project Structure

- `App.tsx` bootstraps the navigator
- `src/navigation/AppNavigator.tsx` defines stack routes
- `src/screens/` contains `Landing`, `Quiz`, and `ChatBot` screens plus shared UI

## Next Steps

- Wire Google Gemini API calls inside `ChatBotScreen`
- Persist quiz history to Firebase Authentication + Firestore
- Replace static quiz seed data with Gemini-generated content

## Quality Checks

```sh
npm run lint
npm test
```

## Troubleshooting

If the Android build fails on Windows, confirm that the Android SDK, emulator, and JDK 17 are installed and that `ANDROID_HOME` is configured. Consult the [React Native environment setup guide](https://reactnative.dev/docs/set-up-your-environment) for detailed steps.
