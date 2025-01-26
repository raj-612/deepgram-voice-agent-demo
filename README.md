# Deepgram Voice Agent Demo

A Next.js application demonstrating Deepgram's Voice Agent capabilities. Live demo at https://deepgram.com/agent

## Prerequisites

- [Node.js v20](https://nodejs.org/en/download/) or higher (recommended to install via [nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- [yarn](https://classic.yarnpkg.com/en/docs/install)
- [Deepgram API Key](https://console.deepgram.com/signup?jump=keys) with `usage:write` scope

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/deepgram-devs/deepgram-voice-agent-demo.git
   cd deepgram-voice-agent-demo
   ```

2. **Create environment file**
   ```bash
   # Create .env file in project root
   DEEPGRAM_API_KEY=<your-deepgram-api-key>
   ```
   Note: When creating the API Key, select "Member" role for proper permissions.

3. **Install dependencies**
   ```bash
   yarn install
   ```

4. **Run the development server**
   ```bash
   yarn dev
   ```
   Visit the URL provided by Next.js (typically http://localhost:3000)

## Project Structure

```
app/
├── api/                  # Backend API endpoints
│   └── authenticate/     # Authentication handling
├── components/          # React components
│   ├── icons/          # SVG icons & visual assets
│   └── VoiceSelector/  # Voice selection feature
├── context/            # State management
│   ├── DeepgramContext     # WebSocket connection
│   ├── MicrophoneContext   # Audio input
│   └── VoiceBotContext     # Bot state & messages
├── hooks/              # Custom React hooks
├── utils/              # Helper functions
└── lib/               # Constants & shared code
```

### Key Components
- `App.js` - Main application component
- `Header.tsx` - Navigation and voice selection
- `Conversation.tsx` - Chat display
- `Intelligence.tsx` - Voice interaction feedback
- `AnimationManager.tsx` - Visual effects

### State Management
- Uses React Context for global state
- Separate contexts for:
  - Deepgram connection
  - Microphone handling
  - Voice bot state

## Development Guide

### Adding New Features

1. **New Routes**
   ```
   app/your-route/page.tsx      # Page component
   app/api/your-route/route.js  # API endpoint (if needed)
   ```

2. **New Components**
   ```
   components/YourComponent.tsx          # Simple components
   components/YourFeature/              # Complex features
   ├── index.tsx
   └── SubComponents.tsx
   ```

3. **State Management**
   ```
   context/YourContext.tsx    # Global state
   hooks/useYourFeature.tsx  # Reusable logic
   ```

### Best Practices
- Use TypeScript for type safety
- Follow existing folder structure
- Keep components focused and reusable
- Use contexts for global state
- Place utilities in appropriate folders
