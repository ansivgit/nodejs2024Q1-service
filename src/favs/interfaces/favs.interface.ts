export interface Fav extends Record<string, string[]> {
  artists: string[]; // favorite artists ids
  albums: string[];
  tracks: string[];
}
