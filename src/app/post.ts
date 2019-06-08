export class Post {
    title: String;
    content: String;
    created_at: Date;
    loveIts: number = 0;

    constructor(titre: string, content: string) {
        this.title = titre;
        this.content = content;
        this.created_at =  new Date();
    }

}
