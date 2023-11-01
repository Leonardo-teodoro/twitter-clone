export default class Comment {
    private _postId: string;
    private _content: string;

    public get content(): string {
        return this._content;
    }
    public set content(value: string) {
        this._content = value;
    }
    public get postId(): string {
        return this._postId;
    }
    public set postId(value: string) {
        this._postId = value;
    }
    constructor(postId: string, content: string) {
        this._content = content;
        this._postId = postId;
    }
}
