# 1st

## 🛠️ 🧪 1st Step Installation Latest Next 13 Mine

[https://nextjs.org/docs/getting-started#manual-setup](https://nextjs.org/docs/getting-started#manual-setup)

![Untitled](1st%208327c12899ce40a68a1efedef7fa836d/Untitled.png)

```bash
npm init --y
```

from cmd

```powershell
Microsoft Windows [Version 10.0.19044.2251]
(c) Microsoft Corporation. All rights reserved.

C:\Users\naasy\Desktop\TEST LAB\md>md next-fundamental

C:\Users\naasy\Desktop\TEST LAB\md>cd next-fundamental

C:\Users\naasy\Desktop\TEST LAB\md\next-fundamental>md first-next-software

C:\Users\naasy\Desktop\TEST LAB\md\next-fundamental>cd first-next-software

C:\Users\naasy\Desktop\TEST LAB\md\next-fundamental\first-next-software>npm init --y
Wrote to C:\Users\naasy\Desktop\TEST LAB\md\next-fundamental\first-next-software\package.json:

{
  "name": "first-next-software",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

C:\Users\naasy\Desktop\TEST LAB\md\next-fundamental\first-next-software>
```

[Getting Started | Next.js](https://nextjs.org/docs/getting-started#manual-setup)

```bash
npm install next react react-dom
```

```jsx
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

```bash
naasy@DESKTOP-EF0CMN2 MINGW64 ~/Desktop/TEST LAB/md/next-fundamental/first-next-software 
$ npm install next react react-dom

added 17 packages, and audited 18 packages in 48s

2 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

naasy@DESKTOP-EF0CMN2 MINGW64 ~/Desktop/TEST LAB/md/next-fundamental/first-next-software 
(master)
$
```

package.json

```jsx
{
  "name": "first-next-software",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "next": "^13.0.5",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}
```

package.json

```jsx
{
  "name": "first-next-software",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "next": "^13.0.5",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}
```

![Untitled](1st%208327c12899ce40a68a1efedef7fa836d/Untitled%201.png)

![Untitled](1st%208327c12899ce40a68a1efedef7fa836d/Untitled%202.png)

package.json

```json
{
  "name": "first-next-software",
  "version": "1.0.0",
  "description": "",
  "main": "star.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "next": "^13.0.5",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}
```

pages\star.js

```jsx
function HomePage() {
    return <div>Salamoon Alaikoom Welcome to Next.js!</div>
  }
  
  export default HomePage
```

![Untitled](1st%208327c12899ce40a68a1efedef7fa836d/Untitled%203.png)

```bash
npm run dev
```

![Untitled](1st%208327c12899ce40a68a1efedef7fa836d/Untitled%204.png)