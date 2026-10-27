export type PageView = 
  | 'overview' 
  | 'assignments' 
  | 'posters' 
  | 'research' 
  | 'notes' 
  | 'tools'
  | 'profile';

export interface FilterState {
  searchQuery: string;
  selectedCategory: string;
  selectedFileType: string;
  sortBy: 'title' | 'filename' | 'size' | 'category';
}
