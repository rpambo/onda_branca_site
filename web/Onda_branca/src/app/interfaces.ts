export interface Teachers {
  id: number;
  first_name: string;
  last_name: string;
  position: string;
  image: {
    url: string;
  };
  created_at: string;
  updated_at: string;
}

export interface Service {
  id: number;
  type: string;
  name: string;
  image: {
    url: string;
  };
  modules?: string[];  // Opcional devido ao omitempty
  start?: string;      // Opcional
  end?: string;        // Opcional
  created_at: string;
  updated_at: string;
}

export interface pub{
  title: string;
  image: {
    url: string;
  };
  category: string;
  content: string;
  created_at: string;
  updated_at: string;
}