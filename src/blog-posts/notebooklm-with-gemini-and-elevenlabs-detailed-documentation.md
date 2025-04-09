---
title: NotebookLM with Gemini and Elevenlabs (Detailed Documentation)
date: 2025-01-11
author: Chirag Joshi
description: Turn PDFs into podcasts using AI! This guide shows how to use Gemini for dialogue generation and ElevenLabs for voice to create conversational audio from documents.
tags:
  - Play With LLM
  - Gemini
  - Elevenlabs
---

If you’re tech-savvy or active on Twitter, you’ve probably heard about **Google NotebookLM** — Google’s AI-powered research assistant. It can analyze uploaded documents (Google Docs, PDFs, and URLs) to generate summaries, answer questions, and create insights. One unique feature of NotebookLM is the ability to transform documents into deep-dive **conversational podcasts.**

In this guide, we’ll build **NotebookLM (PDF to podcast)** using **Gemini** for dialogue generation and **Elevenlabs** for text-to-speech. Let's dive right into it!

## 1. Dialogue Generation Using Gemini

### Create Your Gemini API Key

To start, we’ll need to create a **Gemini API key** from [Google AI Studio](https://aistudio.google.com/).

1. Navigate to **Google AI Studio** and sign in or create an account.
2. Once logged in, click on **Get API Key** to generate your API key.

Now, store this API key in your `.env` file as:

```jsx
GEMINI_API_KEY="YOUR_GEMINI_API_KEY"
```

With this setup, we’re ready to integrate Gemini for dialogue generation.

In the `gemini.py` file of our project, we use the API key to call the Gemini API and create a conversation based on your PDF input. This is the first step in our process of converting PDFs into podcasts.

## 2. Text-to-Speech Using Elevenlabs

### Why Elevenlabs?

Elevenlabs offers over **3,000 voices** across **32 languages**, providing great flexibility in voice generation. Let’s use Elevenlabs to convert the generated dialogue from Gemini into realistic podcast audio.

### Create Your Elevenlabs API Key

1. Go to [Elevenlabs](https://elevenlabs.io/app/sign-up) and create your account.
2. Once logged in, navigate to the **Text-to-Speech App** section [here](https://elevenlabs.io/app/speech-synthesis/text-to-speech).
3. Click on your profile icon, then go to the **API Key** section, and create your API key.

Set the `ELEVENLABS_API_KEY` in your `.env` file:

```jsx
ELEVENLABS_API_KEY="YOUR_ELEVENLABS_API_KEY"
```

To ensure everything is working, you can test Elevenlabs’ Text-to-Speech API using the following curl command:

```bash
curl -X POST https://api.elevenlabs.io/v1/text-to-speech/<voice_id> \
     -H "xi-api-key: <apiKey>" \
     -H "Content-Type: application/json" \
     -d '{
  "text": "text"
}'
```

Replace `<voice_id>` and `<apiKey>` with your credentials.

### Enabling Voices

To select a voice for your podcast:

1. Go to [Elevenlabs Voices](https://elevenlabs.io/app/voice-lab).
2. Select the voice you want and click on the **view button**.
3. Copy the **voice ID**.

Once you have the voice ID, you can specify which voice (male or female) you want for the dialogue speakers in your `elevenlabs.py` file.

## Putting It All Together

Now that we’ve set up both **Gemini** for generating dialogue and **Elevenlabs** for converting the dialogue into speech, it’s time to integrate them.

The process works in two steps:

1. **Dialogue Generation:** We use **Gemini** to analyze the PDF and create a conversational dialogue between two speakers (mentor and student).
2. **Text-to-Speech:** We then use **Elevenlabs** to convert that dialogue into audio files, which you can listen to as a podcast.

Let’s start Project Installation:

### Project Installation

Follow these steps to get the project up and running:

1. **Clone the Repository**

```bash
git clone https://github.com/chiragjoshi12/pdf-to-podcast.git
cd pdf-to-podcast
```

1. **Install Dependencies**

```bash
pip install -r requirements.txt
```

1. **Set Up API Keys**

Create a `.env` file in the root directory and add your **Gemini** and **Elevenlabs** API keys:

```bash
GEMINI_API_KEY="YOUR_GEMINI_API_KEY"
ELEVENLABS_API_KEY="YOUR_ELEVENLABS_API_KEY"
```

1. **Run the Application**

Finally, start the application using **Streamlit**:

```bash
streamlit run main.py
```

The app should now be live on your local machine, and you can start uploading PDFs to convert them into podcasts.

---

This is my first attempt at writing a technical blog, so your feedback and suggestions are greatly appreciated as I continue to learn and improve!

Thanks 🙏 !