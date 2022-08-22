# Git Basic Cheatsheet  

## Commands  

### Initial setup

Add a new GitHub repository at [GitHub.com/new](https://github.com/new)  
Use terminal to navigate to local enclosing file (repos)  
Use `git clone` followed by the GitHub repository SSH key (under `Code > Clone > SSH`)  
`git clone git@github.com:nGonium/odin_projects.git`  

### Local workflow  

To add all local files to staging area  
`git add .`  
To add a file or directory to staging area  
`git add <file>`  
To commit staged files with a message (note this commit changes to the local, not remote repo)  
`git commit -m "Meaningful but short message describing changes"`  
Update remote repository with local changes  
`git push` or  
`git push origin main` for specificity, replace `main` with the current branch  

### Other commands

`git status`  
`git log`  

## Git with style  

Git syntax: program | action | destination (e.g. `git add .`)  

### Commit etiquette  

- Frequent commits whenever a feature or fix is successful (atomic commits)
- Concise meaningful subject line (~50 chars max)
- Use extended description if necessary (blank line between subject and description)
- Capitalize subject line, no end punctuation
- Use imperative mood/active voice
- Wrap body at 72 chars