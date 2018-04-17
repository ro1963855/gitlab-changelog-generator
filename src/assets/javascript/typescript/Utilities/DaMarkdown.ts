export default class DaMarkdown {

    public title(number: number, title: string): string {
        let index = 0;
        let result = "";
        while (index < number) {
            result = `${result}#`;
            index++;
        }

        return `${result} ${title}`;
    }

    public changeLine(): string {
        return "\n";
    }

    public space(number: number): string {
        let index = 0;
        let result = "";
        while (index < number) {
            result = `${result} `;
            index++;
        }

        return result;
    }

    public textWithLink(text: string, url: string): string {
        return `[${text}](${url})`;
    }

    public strong(text: string): string {
        return `**${text}**`; 
    }

    public list(text: string): string {
        return `- ${text}`; 
    }

}