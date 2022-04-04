# Git Basic Cheatsheet

## Commands

### Initial setup
Copy SSH key from GitHub repository  
`git clone git@github.com:nGonium/odin_projects.git`

Update remote repository with local changes  
`git push` or  
`git push origin main` for specificity

### Local workflow

To add all local files to staging area  
`git add .`
To add a file or directory to staging area  
`git add <file>`  
To commit staged files with a message  
`git commit -m "Meaningful but short message describing changes"`

### Other commands

`git status`  
`git log`  

## Git with style

Git syntax: program | action | destination (e.g. git add <file>)

### Commit etiquette  

- Frequent commits whenever a feature or fix is successful (atomic commits) 
- Concise meaningful subject line (~50 chars max)
- Use extended description if necessary (blank line between subject and description)
- Capitalize subject line, no end punctuation
- Use imperative mood/active voice 
- Wrap body at 72 chars 