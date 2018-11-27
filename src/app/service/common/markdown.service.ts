import { Injectable } from '@angular/core';
import hljs from 'highlight.js';
import md from 'markdown-it';
const languageSubset = [
  'java',
  'python',
  'typescript',
  'javascript',
  'bash',
  'dockerfile',
  'powershell',
  'shell',
  'yaml'];
function highlight(str, __) {
  try {
    const highlighted =   hljs.highlightAuto(str, languageSubset);
    console.log(highlighted);
    return '<pre><code class="hljs '+ highlighted.language +'">' +highlighted.value + '</code></pre>';
  } catch (__) {
    console.log(__);
  }
}

const markdown = md({
  html: true,        // Enable HTML tags in source
  xhtmlOut: false,        // Use '/' to close single tags (<br />).
  breaks: false,        // Convert '\n' in paragraphs into <br>
  langPrefix: 'language-',  // CSS language prefix for fenced blocks. Can be
  linkify: false,        // Autoconvert URL-like text to links
  typographer: false,
  quotes: '“”‘’',
  highlight: highlight
});
markdown.renderer.rules.code_block = markdown.renderer.rules.fence;

@Injectable()
export class MarkdownService {

  constructor() { }

  render(content: string) {
    return markdown.render(content);
  }

}
