import {Author} from './author.model';

export class Tweet {
  public id: string;
  public text: string;
  public author: Author;

  constructor(id: string, text: string, author: Author) {
    this.id = id;
    this.text = text;
    this.author = author;
  }
}
