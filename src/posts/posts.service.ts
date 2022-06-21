import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Posts } from './interfaces/post.interface';
import { Model } from 'mongoose';

@Injectable()
export class PostsService {
  constructor(@InjectModel('Post') private readonly postModel: Model<Posts>) {}

  async create(post: Posts): Promise<Posts> {
    const newPost = new this.postModel({ ...post });
    return await newPost.save();
  }
  async findAll(): Promise<Posts[]> {
    return await this.postModel.find();
  }

  async findOne(id: string): Promise<Posts> {
    return await this.postModel.findOne({ _id: id });
  }

  async update(id: string, post: Posts): Promise<Posts> {
    return await this.postModel.findByIdAndUpdate(id, post, { new: true });
  }

  async delete(id: string): Promise<Posts> {
    return await this.postModel.findByIdAndRemove(id);
  }
}
