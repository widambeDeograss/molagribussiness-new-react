export type TPost = {
    id: string;
    title: string;
    image: string;
    content: any;
    path: string;
    tags: string[];
    type: "PUBLISHED" | "DRAFT";
    comments: any[];
    createdAt: Date;
    updatedAt: Date;
    saved: any;
    _count: {
      comments: number;
    };
  };