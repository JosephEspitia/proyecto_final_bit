export class Forum {
  _id: string;
  forumUser: string;
  forumEmail: string;
  forumTitle: string;
  forumTags: string[];
  ForumContent: string;
  ForumAnswers: string[];

  constructor(
    _id = ``,
    forumUser = ``,
    forumEmail = ``,
    forumTitle = ``,
    forumTags = [],
    ForumContent = ``,
    ForumAnswers = []
  ) {
    this._id = _id;
    this.forumUser = forumUser;
    this.forumEmail = forumEmail;
    this.forumTitle = forumTitle;
    this.forumTags = forumTags;
    this.ForumContent = ForumContent;
    this.ForumAnswers = ForumAnswers;
  }
}
