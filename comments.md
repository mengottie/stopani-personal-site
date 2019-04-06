#Comments

## Missing readme.md file
The readme.md file should be provided in every project. It should contain:

- Brief introduciton to the project
- Instruction on how to run the project in developmode
- Instruction on how to test the project
- Instruction on how to run the project in production

## Folder structure
Avoid to keep all the files in the root allows to have a cleaner workspace. A common folder structure is the following:

```
|- public //contains the files prod ready
 |- assets //contains static assets, like images
|- src //contains all the files needed in dev
 |- scss
  |- components
  |- elements
  |- mixins
  |- placeholders
  |- Variables
   - main.scss
   - bundle1.scss
 |- js
  |- vendor
   - main.js
```