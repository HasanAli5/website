interface Project {
    id: string;
    image?: string;
    title: string;
    year: string;
    description: string;
    linkname:string;
    link: string;
    preview?:Preview;
}

interface Preview {
    imageList?:Array<string>;
    linkname:string;
    link:string;
}

export type {
    Project
}