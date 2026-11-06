export type CategoryId =
  | 'fundamental'
  | 'tali_ikatan'
  | 'sandi_komunikasi'
  | 'kompas_menaksir'
  | 'kebangsaan'
  | 'sku_ramu'
  | 'kemranjen_2026';

export interface Question {
  id: string;
  category: CategoryId;
  categoryLabel: string;
  posNumber?: number; // 1-6
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  sourceDoc: string;
  pageOrArticleRef?: string;
  difficulty: 'Mudah' | 'Sedang' | 'Tantangan';
}

export interface UserAnswerRecord {
  questionId: string;
  selectedIndex: number;
  isCorrect: boolean;
  timestamp: number;
}

export type QuizMode = 'practice' | 'pos' | 'tryout' | 'mistakes' | 'guide';

export type DisplayView = 'standard' | 'ifp';

export interface CategoryStats {
  total: number;
  correct: number;
}
