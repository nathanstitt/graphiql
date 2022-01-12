import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror-graphql/hint';
import 'codemirror-graphql/info';
import 'codemirror-graphql/jump';
import 'codemirror-graphql/lint';
import 'codemirror-graphql/mode';
import 'codemirror-graphql/results/mode';
// import 'codemirror-graphql/utils/info-addon';
import 'codemirror-graphql/variables/hint';
import 'codemirror-graphql/variables/lint';
import 'codemirror-graphql/variables/mode';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/dialog/dialog';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/fold/brace-fold';
import 'codemirror/addon/fold/foldgutter';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/lint/lint';
import 'codemirror/addon/search/jump-to-line';
import 'codemirror/addon/search/search';
import 'codemirror/addon/search/searchcursor';
import 'codemirror/keymap/sublime';
import 'codemirror/mode/javascript/javascript';
import type * as CM from 'codemirror';

declare module CodeMirror {
  export interface Editor extends CM.Editor {}
  export interface EditorChangeLinkedList extends CM.EditorChangeLinkedList {}
  export interface ShowHintOptions {
    completeSingle: boolean;
    hint: any;
    container: HTMLElement | null;
  }
}

import Comi from 'codemirror';
const CodeMirror: any = Comi;

export default CodeMirror;
