<a  href="https://mavennet.com/">
	<img  alt="Mavennet"  src="https://mavennet-website.s3.amazonaws.com/assets/logo-dark.png"  width="300" />
</a>

### Traceability Vocab

https://w3c-ccg.github.io/traceability-vocab/

### To build library

`npm update && npm run build`

### To install library
` npm i @mavennet/traceability-dto `

### To install a branch of library

`npm i Mavennet/traceability-dto#branch-name`

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
