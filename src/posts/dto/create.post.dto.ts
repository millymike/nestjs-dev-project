export class CreatePostDto {
  id: string;
  title: string;
  body: string;
  published: boolean;
  created_at: Date;
  updated_at: Date;
}
