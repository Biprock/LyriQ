const Songs = [
    {
      id: 1,
      favourite: false,
      songName: "Cupid",
      duration: "00:33",
      listeners: "75,567,777",
      artist: "FIFTY FIFTY",
      song: "https://firebasestorage.googleapis.com/v0/b/lyriq-24287.appspot.com/o/Ringtone%2FCupid.mp3?alt=media&token=d2ba8b47-182b-4f16-b34e-0f1c8ea567c0",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/lyriq-24287.appspot.com/o/images%2Fcupid.jpeg?alt=media&token=0d8a4e7f-2d20-4cf5-a2be-055c6fa89688",
    },
    {
      id: 2,
      favourite: false,
      songName: "Ye Ishq Hai",
      duration: "04:42",
      listeners: "63,879,234",
      artist: "Pritam, Shreya Ghosal",
      song: "https://firebasestorage.googleapis.com/v0/b/lyriq-24287.appspot.com/o/Ringtone%2F03.%20Yeh%20Ishq%20Hai.mp3?alt=media&token=09675500-11ad-4c9c-b069-2b03ebdaf571",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/lyriq-24287.appspot.com/o/images%2Fjab.jpeg?alt=media&token=e6d3eb66-7cfe-44ae-8ca7-f93a9f6a1eb7",
    },
    {
      id: 3,
      favourite: false,
      songName: "Kahani Suno",
      duration: "02:53",
      listeners: "88,909,222",
      artist: "Kaifi Khalil",
      song: "https://firebasestorage.googleapis.com/v0/b/lyriq-24287.appspot.com/o/Ringtone%2FKahani%20Suno%202.0%20-%20Kaifi%20Khalil%20320%20Kbps.mp3?alt=media&token=4a298987-a212-4dad-9406-14deaf7d6c1e",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/lyriq-24287.appspot.com/o/images%2Fkahani.jpeg?alt=media&token=3cee1ccd-9fa8-4f6e-88c4-b1d6c2ed6dda",
    },
    {
      id: 4,
      favourite: false,
      songName: "Khamoshiyan",
      duration: "05:35",
      listeners: "46,889,887",
      artist: "Arijit Singh",
      song: "https://firebasestorage.googleapis.com/v0/b/lyriq-24287.appspot.com/o/Ringtone%2F01%20Khamoshiyan%20(Arijit%20Singh)%20320Kbps.mp3?alt=media&token=eb9ecf2a-639d-4890-9f37-0fe492c3f643",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/lyriq-24287.appspot.com/o/images%2Fkh.jpeg?alt=media&token=75490876-e666-4039-a9c4-a8e523e7a1e0",
    },
    {
      id: 5,
      favourite: false,
      songName: "Naatu Naatu",
      duration: "03:34",
      listeners: "92,234,222",
      artist: "Kaala Bhairava , Rahul Sipligunj",
      song: "https://firebasestorage.googleapis.com/v0/b/lyriq-24287.appspot.com/o/Ringtone%2FNatu-Natu_320(PagalWorld).mp3?alt=media&token=a90861c1-f252-4a72-81f8-67a0a8e65ad8",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/lyriq-24287.appspot.com/o/images%2Fnatu.jpeg?alt=media&token=86d941d1-860f-484f-96cc-8e1729a5f33f",
    },
    {
      id: 6,
      songName: "Attention",
      artist: "Charlie Puth",
      duration: "03:31",
      listeners: "62,267,223",
      song: "https://firebasestorage.googleapis.com/v0/b/lyriq-24287.appspot.com/o/Ringtone%2FAttention%20-%20Charlie%20Puth(WellMp3.In).mp3?alt=media&token=932165e6-c337-481d-b186-30eb07a4b2a7",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/lyriq-24287.appspot.com/o/images%2Fattention.jpeg?alt=media&token=f6d1f429-3058-460e-9e62-3bd388e0c568",
    },
    {
      id: 7,
      favourite: false,
      songName: "Parbo Na",
      artist: "Arijit Singh",
      duration: "04:49",
      listeners: "56,888,750",
      song: "https://firebasestorage.googleapis.com/v0/b/lyriq-24287.appspot.com/o/Ringtone%2FParbo-Na-Ami-Charte-Toke_320(PagalWorldl).mp3?alt=media&token=e6533697-932f-4c2a-93c0-287731c48865",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/lyriq-24287.appspot.com/o/images%2Fparbona.jpeg?alt=media&token=28f2218d-d7a8-4631-a6eb-8e9794860b1e",
    },
    {
      id: 8,
      favourite: false,
      songName: "Tera Zikr",
      artist: "Darshan Raval",
      duration: "03:28",
      listeners: "85,450,335",
      song: "https://firebasestorage.googleapis.com/v0/b/lyriq-24287.appspot.com/o/Ringtone%2Fnew_320_Tera%20Zikr%20-%20Darshan%20Raval.mp3?alt=media&token=f9731a3e-11c6-4c45-9873-0cae423c12cb",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/lyriq-24287.appspot.com/o/images%2Fzikr.jpeg?alt=media&token=63fc8c7b-a97a-4c52-9b96-7c87a8f758cf",
    },
    {
      id: 9,
      favourite: false,
      songName: "Jab Tak",
      artist: "Armann Malik",
      duration:" 02:54",
      listeners: "64,876,324",
      song: "https://firebasestorage.googleapis.com/v0/b/lyriq-24287.appspot.com/o/Ringtone%2Fbollywood_MSDhoni%20-%20Jab%20Tak.mp3?alt=media&token=85dc6cd3-66f8-4ba9-91b7-b5f9ca8eabf1",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/lyriq-24287.appspot.com/o/images%2Ftak.jpeg?alt=media&token=4ca0dfc2-e5e5-4133-bdab-04094c4474f8",
    },
    {
      id: 10,
      favourite: false,
      songName: "Dil ibaadat",
      artist: "KK ",
      duration: "05:29",
      listeners: "56,897,768",
      song: "https://firebasestorage.googleapis.com/v0/b/lyriq-24287.appspot.com/o/Ringtone%2FDil%20Ibaadat%20-%20Tum%20Mile%20320%20Kbps.mp3?alt=media&token=0ae29b29-c0c8-42f0-bf26-2a6bf3c5eca4",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/lyriq-24287.appspot.com/o/images%2Fdil.jpeg?alt=media&token=b5e89ffa-6b18-4451-b654-ea8032043a5b",
    },
  ];
  
  export { Songs };