import { Injectable } from '@angular/core';
declare var md;
declare function require(x: string): any;
md = require('markdown-it')({
  html: true,        // Enable HTML tags in source
  xhtmlOut: false,        // Use '/' to close single tags (<br />).
  breaks: false,        // Convert '\n' in paragraphs into <br>
  langPrefix: 'language-',  // CSS language prefix for fenced blocks. Can be
  linkify: false,        // Autoconvert URL-like text to links
  typographer: false,
  quotes: '“”‘’',
  highlight: function (/*str, lang*/) { return ''; }
});
@Injectable()
export class MarkdownService {

  constructor() { }

  render(content: string) {
    return md.render(content);
  }

}
