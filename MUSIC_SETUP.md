# Background Music Setup Guide

## Finding Peaceful Zen Sanctuary Music

To complete the audio setup, you need to add a zen sanctuary music file. Here are the best sources for royalty-free music:

### Recommended Sources

1. **Pixabay Audio Library** (https://pixabay.com/music/)
   - Search terms: "zen meditation", "zen garden", "peaceful sanctuary", "guzheng", "bamboo flute"
   - License: Free to use, no attribution required
   - Format: MP3
   - Recommended duration: 3-5+ minutes for smooth looping

2. **FreePD** (https://freepd.com)
   - Categories: Asian, Meditation, Relaxing
   - Public domain music
   - Good for traditional Chinese instruments

3. **YouTube Audio Library** (https://studio.youtube.com/channel/UC.../music)
   - Filter by Genre: "Ambient" or "World"
   - Search: "Chinese zen", "meditation", "sanctuary"
   - Royalty-free tracks available

### Recommended Music Characteristics

- **Instruments**: Guzheng (古筝), Erhu (二胡), bamboo flute, temple bells
- **Tempo**: Slow and meditative (60-80 BPM)
- **Volume**: Should be ambient (already set to 35% in code)
- **Duration**: 3-5+ minutes minimum for seamless looping
- **Mood**: Peaceful, calming, contemplative

### Installation Steps

1. **Download** your chosen zen music track
2. **Rename** the file to `zen-music.mp3`
3. **Place** the file in the `/public` folder of your project:
   ```
   /public/zen-music.mp3
   ```

### File Location
```
HotelBookingPageDemo/
├── public/
│   ├── zen-music.mp3  ← Place your music file here
│   ├── hotel-logo.png
│   ├── mountain.jpg
│   └── room.png
```

### Testing

After adding the music file:
1. Start your development server: `npm run dev`
2. Open the website in your browser
3. The music should autoplay (some browsers may require user interaction)
4. Test the toggle button in the bottom-right corner
5. Music should loop continuously and persist across page navigation

### Troubleshooting

- **Music doesn't autoplay**: Modern browsers restrict autoplay. The music will start after the first user interaction (clicking anywhere on the page).
- **Music is too loud/quiet**: Adjust the `volume` prop in `App.jsx` (line 49). Current value is 0.35 (35%). Range: 0.0 to 1.0.
- **Toggle button not working**: Check browser console for errors and ensure the audio file path is correct.

### Alternative Format
If you prefer OGG format for better browser compatibility, rename to `zen-music.ogg` and update line 46 in `App.jsx`:
```jsx
src="/zen-music.ogg"
```
