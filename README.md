# Traceability-DTO

![Mavennet](https://mavennet-website.s3.amazonaws.com/assets/logo-dark.png)

### Build Status
[![CI/CD](https://github.com/Mavennet/traceability-dto/actions/workflows/release.yaml/badge.svg)](https://github.com/Mavennet/traceability-dto/actions/workflows/release.yaml)

### Traceability Vocab

https://w3c-ccg.github.io/traceability-vocab/

## Table of Contents

- [Build](#build-%EF%B8%8F)
- [Installation](#installation-%EF%B8%8F)
- [Usage](#usage-%EF%B8%8F)
- [Troubleshooting](#troubleshooting-)
- [More About the Repository](#more-about-the-repository-)
    - [Branches](#branches)
    - [Navigation](#navigation)
    - [Notes](#notes)

## Build 

### To build library

`npm update && npm run build`

## Installation 

### To install library
` npm i @mavennet/traceability-dto `

### To install a branch of library

`npm i Mavennet/traceability-dto#branch-name`

## Usage 

### Repos that should use this library

- [Neoflow-DTO](https://github.com/Mavennet/neoflow-dto)
- [Metaltrail-DTO](https://github.com/Mavennet/metaltrail-dto)

### Importing

After using [npm to install](#installation-%EF%B8%8F) the package, import the DTO at the top of the file that is to use it. 

```ts
import { RandomDTO } from '@mavennet/traceability-dto'
```
## Troubleshooting 

There are two main mistakes people make that result in an error. Either not building or not exporting the DTO. 

### Did not build

There are two parts to the package: src and lib. 

##### src:
Is what you are to be editing. When making changes, creating new DTOs, adding constants, etc., all this must be done here. 

#### lib:
Is where the DTOs are being exported from when you are importing and using them in your project. Editing the files here do not do much as when you do `npm run build`, it gets over written. 

The problem arises when you make changes to src but forget to do `npm run build`. Although the src contains updates files, the files are going to be imported form lib, which still has the outdates version. Make sure to build the package before pushing the changes to any branch. 

### Did not export

Each folder and sub-folder contains a file called index.ts. Ever wonder what it does? It's basically the file where DTOs and folders are being exported from. Without a file being exported, it will not be accesible in another program and you will likley get the "does not exist" error in your import statement. To solve this, add an export statement into the index file contained within the folder where your file is located. 

```ts
export * from './random.dto'
```

### Cannot make an instance of an abstract class. 

Some DTOs are abstract classes, and probably for good reason. But if there is ever the need to create an instance of one, just create another class which extends the abstract one and export that. 

Reference:
The [abstract class](https://github.com/Mavennet/traceability-dto/blob/master/src/documents/dto/saveS3DocumentsFolderPath.dto.ts) and the resolved [implementation](https://github.com/Mavennet/neoflow-dto/blob/master/src/documents/dto/saveS3DocumentsFolderPath.dto.ts)

## More About the Repository

### Branches

[**master**](https://github.com/Mavennet/traceability-dto) - branch that is published as a package version (changes to this will initiate a package version bump)

**_others_** - feature branch

### Navigation

Below is a brief overview of the current code base structure.

```bash
src
├── analytics
│   ├── consts
│   └── dto
├── auth
│   ├── consts
│   └── dto
├── contracts
│   ├── consts
│   └── dto
├── credentials
│   ├── consts
│   └── dto
├── documents
│   ├── consts
│   └── dto
├── events
│   ├── consts
│   └── dto
│       └── Does not contain any DTOs as of now
├── general
│   ├── consts
│   └── dto
├── notifications
│   ├── consts
│   └── dto
├── organizations
│   ├── consts
│   └── dto
├── presentations
│   └── dto
├── products
│   ├── consts
│   └── dto
│       ├── releasing
│       └── sharing
├── users
│   ├── consts
│   └── dto
└── index.ts
```

### Notes

- Both [Metaltrail-DTO](https://github.com/Mavennet/metaltrail-dto) and [Neoflow-DTO](https://github.com/Mavennet/neoflow-dto) import DTOs from here. Any changes here for an issue regarding Neoflow for example, may affect Metaltrail.
- This is a **private repository**, only Mavennet dev team may access it
