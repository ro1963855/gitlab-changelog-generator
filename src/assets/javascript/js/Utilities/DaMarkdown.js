export default class DaMarkdown {
    title(number, title) {
        let index = 0;
        let result = "";
        while (index < number) {
            result = `${result}#`;
            index++;
        }
        return `${result} ${title}`;
    }
    changeLine() {
        return "\n";
    }
    space(number) {
        let index = 0;
        let result = "";
        while (index < number) {
            result = `${result} `;
            index++;
        }
        return result;
    }
    textWithLink(text, url) {
        return `[${text}](${url})`;
    }
    strong(text) {
        return `**${text}**`;
    }
    list(text) {
        return `- ${text}`;
    }
}
