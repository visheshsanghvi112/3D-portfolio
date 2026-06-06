export type Song = {
  id: string;
  title: string;
  artist: string;
  year?: number;
  language: string;
  editable?: false; // explicitly non-editable / cannot be added to
};

// Read-only catalogue of Hindi classic songs. Do NOT provide UI to add or edit these entries.
const songs: Song[] = [
  {
    id: "s-omd-kc",
    title: "O Mere Dil Ke Chain",
    artist: "Kishore Kumar",
    year: 1971,
    language: "hi",
    editable: false,
  },
  {
    id: "s-chura",
    title: "Chura Liya Hai Tumne Jo Dil Ko",
    artist: "Asha Bhosle / Mohammed Rafi",
    year: 1973,
    language: "hi",
    editable: false,
  },
  {
    id: "s-ljg",
    title: "Lag Ja Gale",
    artist: "Lata Mangeshkar",
    year: 1964,
    language: "hi",
    editable: false,
  },
  {
    id: "s-palpal",
    title: "Pal Pal Dil Ke Paas",
    artist: "Kishore Kumar",
    year: 1973,
    language: "hi",
    editable: false,
  },
  {
    id: "s-kabhi",
    title: "Kabhi Kabhie Mere Dil Mein",
    artist: "Mukesh",
    year: 1976,
    language: "hi",
    editable: false,
  },
  {
    id: "s-pyarhua",
    title: "Pyar Hua Ikrar Hua",
    artist: "Manna Dey / Lata Mangeshkar",
    year: 1955,
    language: "hi",
    editable: false,
  },
  {
    id: "s-aemer",
    title: "Ae Mere Watan Ke Logon",
    artist: "Lata Mangeshkar",
    year: 1963,
    language: "hi",
    editable: false,
  }
];

export default songs;
