### Introduktion
Hi, I created this project to make writing LaTeX reports more fun, and less tedios for me.
The project takes care 'as of now' of all the compiling of .tex files. It also has a nifty feature where it auto compiles the files when you save a .tex document.

### Installation

This project relies on the pdflatex command, so make sure that you have it installed.
It also relies on npm, so make sure it also is installed.

Other than that. Navigate to the folder in your terminal, and run:
```
  npm install
```

After that you should have alle the nessesary parts installed for the automater to work.

### How to use

As of now the automater only has 3 commands.

```
gulp latex //compiles any .tex file it can find, and puts it in the build folder

gulp watch //watches all the .tex files, and runs gulp latex, any time a file has change

gulp //starts the default function which is the watch command
```

Any and all help to make the automater more easy and powerfull is appreciated
