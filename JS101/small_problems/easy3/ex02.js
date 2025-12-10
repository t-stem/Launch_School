/* Write a function that will take a short line of text, and write it to the console log within a box. */

function logInBox(text) {
    const TEXT_LENGTH = text.length;
    let lineOuter = `+-${"-".repeat(TEXT_LENGTH)}-+`;
    let lineInner = `| ${" ".repeat(TEXT_LENGTH)} |`;
    let lineCenter = `| ${text} |`;
    console.log(lineOuter + '\n' + lineInner + '\n' + lineCenter + '\n' + lineInner + '\n' + lineOuter);
}

logInBox('To boldly go where no one has gone before.');

/*
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+
*/

logInBox('');

/*
logInBox('');
+--+
|  |
|  |
|  |
+--+
*/