const tabSpacing = '   ';
const newLine = '\n';

const formatLine = (line) => {
    return `${tabSpacing}${line}${newLine}`;
}

export const generateSocialMetaTags = (metaData) => {
    const {title, description, url, imageUrl} = metaData;
    let generateSocialMetaTags = formatLine('');
    generateSocialMetaTags += formatLine('<!-- Essential Social Meta Tags -->');
    generateSocialMetaTags += formatLine(`<meta property='og:title' content="${title}" />`);
    generateSocialMetaTags += formatLine(`<meta property='og:description' content="${description}" />`);
    generateSocialMetaTags += formatLine(`<meta property='og:url' content="${url}" />`);
    generateSocialMetaTags += formatLine(`<meta property='og:image' content="${imageUrl}" />`);
    generateSocialMetaTags += formatLine(`<meta property='twitter:card' content="${imageUrl}" />`);
    generateSocialMetaTags += formatLine(`<meta property='og:site_name' content="${title}" />`);
    generateSocialMetaTags += formatLine(`<meta property='twitter:image:alt' contain="${title}" />`);
    return generateSocialMetaTags;
}

export const generateMetaTags = (metaData) => {
    const {title, description, keywords, url, author} = metaData;
    console.log(title);
    let generateMetaTags = `<head>${newLine}`;
    generateMetaTags += formatLine(`<title>${title}</title>`);
    generateMetaTags += formatLine(`<meta name='description' content="${description}" />`);
    generateMetaTags += formatLine(`<meta name='keywords' content="${keywords}" />`);
    generateMetaTags += formatLine(`<link rel='canonical' href="${url}" />`);
    generateMetaTags += formatLine(`<meta name='author' content="${author}" />`);
    generateMetaTags += formatLine(`<meta name='robots' content='index, follow' />`);
    generateMetaTags += generateSocialMetaTags(metaData);
    generateMetaTags += '</head>';
    return generateMetaTags;
}
