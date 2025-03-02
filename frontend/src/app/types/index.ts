  export interface Presentation {
    id: string;
    title: string;
    createdBy: string;
    createdAt: string;
    updatedAt?: string;
  }

  export interface PresentationList{
    presentations: Presentation[]
  }