# Simple Music App Desktop View

> Menggunakan API dari [last.fm](https://www.last.fm/api#getting-started)

## Preview

![localhost_3000_](https://user-images.githubusercontent.com/43085583/151721421-acd8429d-f75e-459b-8fc3-5878c7a4e43c.png)
Preview the design [Figma](https://www.figma.com/file/J1RNcoMrNSYgTfi7hDKeFW/simple-music?node-id=0%3A1):

## Cara menjalankan

jalankan project dengan [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/):

```bash
npm dev
# atau
yarn dev
```

## Kekurangan

1. Struktur model sangat sederhana
2. Bloking CORS untuk fitur `search` jika di deploy ke vercel
3. Design tidak ramah selain desktop
4. Unit testing belum sempat dikerjakan
5. Fetching data `search artist dan tracks` masih berada di index.js page folder
6. Styling masih kurang rapi

masalah point 5 pada folder `lib/fetcher.js` belum bisa diimplementasikan secara maksimal penggunaanya,

```jsx
// search artist
export const getSearchArtist = async (params) => {
  try {
    const res = await axios.get(
      `${BASE_URL}?method=artist.search&artist=${params}&api_key=${API_KEY}&format=json&limit=10`
    );
    const result = await res.data.results.artistmatches;
    const data = await result.artist;
    return data;
  } catch (error) {
    console.error("cant fetch the search artist data");
  }
};

// search track
export const getSearchTracks = async (params) => {
  try {
    const res = await axios.get(
      `${BASE_URL}?method=track.search&track=${params}&api_key=${API_KEY}&format=json&limit=5`
    );
    const result = await res.data.results.trackmatches;
    const data = await result.track;
    return data;
  } catch (error) {
    console.error("cant fetch the search track data");
  }
};
```

## Terimakasih

Terimakasih telah menyempatkan waktu, dan maaf untuk segala kekurangan saya dalam pengerjaan test ini.

~herka
