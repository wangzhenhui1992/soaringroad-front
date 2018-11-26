import { Injectable } from '@angular/core';
import hljs from 'highlight.js';
import md from 'markdown-it';

function highlight(str, __) {
  try {
    return '<pre><code class="hljs">' + hljs.highlightAuto(str).value + '</code></pre>';
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


@Injectable()
export class MarkdownService {

  constructor() { }

  render(content: string) {
    return markdown.render(content);
  }

}
