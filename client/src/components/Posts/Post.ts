import Comment from './Comment'

export default class Post {
    constructor(
        private title: string,
        private body: string,
        private comments: Comment[],
    ) {}
}
