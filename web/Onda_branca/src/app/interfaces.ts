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
  description: string
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

export interface TrainingData {
  ID: number;
  Title: string;
  Description: string;
  OrderNumber: number;
  TrainingID: number;
  Training: Training;
  Service: Service;
}

export interface Training {
  id: number;
  service_id: number;
  opening_date: string;      // Você pode converter para Date se quiser
  is_pre_sale: string;       // Também pode usar Date
  pre_sale_price: string;    // Pode ser string ou number, dependendo da API
  final_price: string;
}

export interface Service {
  id: number;
  type: string;
  name: string;
  image: {
    url: string;
  };
  description: string;
  created_at: string;
  updated_at: string;
}