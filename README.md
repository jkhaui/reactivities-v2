# tl;dr
- From the root directory, run `dotnet restore`.
- cd into `API` and run `dotnet run`.
- In a second terminal, cd into `client-app` and run `yarn`.
- After the client packages have installed, run `yarn start`.

The app should now be running on http://localhost:3000/ with .NET 3.0 and
the latest React, MobX, and TypeScript packages 
🎉

Change Log
-----

## Client
#### Packages
- Updated all non-breaking client packages.
- Bump react, react-dom, react-scripts, TypeScript, mobx, mobx-react-lite.
- Move TypeScript and all TypeScript modules to devDependencies.
- Added prettier, onchange packages to devDependencies (see Misc).

#### Code Changes
- Remove all decorators (e.g. `@action`, `@computed`) from MobX store as they are deprecated
in MobX 6.0.0.
- Updated tsconfig.json. Added `"noFallthroughCasesInSwitch": true,` and updated 
`"jsx": "preserve"` to `"jsx": "react"` (otherwise the app won't run).
- Add `makeAutoObservable` to constructor of each store to replace decorators.
- `runInAction` only accepts 1 parameter now (anon function)? Thus, the title string has been removed
from each `runinAction` method.
- Some fixes across the app where type errors were thrown due to a string or undefined being passed instead of a date.
- Quick and dirty TypeScript fixes (adding `as any`) just to get the app running; please feel free to redo 
this and add proper type definitions.

### Misc
- Removed `package-lock.json` in favour of yarn as the package manager (no reason for this other than personal preferene;
recommended to use `yarn` instead of `npm install` to add packages).
- Added prettier & onchange as devDependencies—along with concomitant scripts—for standardised code formatting.

## Server
- TODO (mostly just fixed all the incompatible/breaking packages when upgrading to .NET 3.0).


**P.S. I'm mostly a frontend dev, so please check over the C# projects and submit a PR if you have any improvements!**