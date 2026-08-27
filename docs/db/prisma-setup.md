Prisma 8 + Neon PostgreSQL Setup Workflow

Project setup: pnpm + TypeScript + Prisma 8 + Neon PostgreSQL.
This workflow uses Prisma 8's contract-based ORM workflow.

1. Install Prisma
   pnpm add @prisma/orm-postgres

# Installs Prisma ORM's PostgreSQL package for the application.

pnpm add -D @prisma/cli-engine

# Installs the Prisma CLI used for contract, database, and development commands.

pnpm add dotenv

# Loads DATABASE_URL from .env.

pnpm add -D tsx

# Allows TypeScript test scripts to be executed directly with pnpm exec tsx.

2. Initialize Prisma
   pnpm exec prisma init

# Initializes Prisma configuration in the project.

Check the CLI:

pnpm exec prisma --version

# Confirms Prisma is installed and shows the current version.

3. Create a Neon PostgreSQL database

Create a project/database on Neon and copy its PostgreSQL connection string.

Example:

DATABASE_URL="postgresql://username:password@ep-example-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require"

# Stores the Neon PostgreSQL connection string; keep .env out of Git.

Verify .env is ignored:

git check-ignore -v .env

# Confirms the database credentials will not be committed.

Neon Auth: [Can be skipped] — only enable it if the project specifically needs Neon-managed authentication.

4. Define the Prisma contract

Create:

src/prisma/contract.ts

Example:

import { defineContract } from '@prisma/orm-postgres/contract-builder';

export const contract = defineContract({}, ({ field, model }) => {
const User = model('User', {
fields: {
id: field.id.uuidv7String(),
email: field.text().unique(),
username: field.text().optional(),
name: field.text().optional(),
createdAt: field.temporal.createdAtString(),
updatedAt: field.temporal.updatedAtString(),
},
});

return {
models: {
User,
},
};
});

The contract defines the application's database structure.

5. Configure Prisma

Create:

prisma.config.ts
import 'dotenv/config';
import { definePrismaConfig } from '@prisma/cli-engine';
import { defineConfig as ormConfig } from '@prisma/orm-postgres/config';

export default definePrismaConfig({
orm: ormConfig({
contract: './src/prisma/contract.ts',
db: {
connection: process.env['DATABASE_URL']!,
},
}),
});

The config tells Prisma where the contract is and how to connect to PostgreSQL.

6. Generate contract artifacts
   pnpm exec prisma contract emit

# Generates contract.json and contract.d.ts from contract.ts.

This produces:

src/prisma/
├── contract.ts
├── contract.json
└── contract.d.ts

contract.json and contract.d.ts are generated files — don't edit them manually.

7. Create the database schema

First preview the changes:

pnpm exec prisma db init --dry-run

# Shows what Prisma plans to create without changing the database.

If everything looks correct:

pnpm exec prisma db init

# Creates the tables defined by the contract and signs the database.

--dry-run can be skipped when you're already confident about the contract.

8. Verify the database
   pnpm exec prisma db schema

# Inspects the actual PostgreSQL schema in Neon.

pnpm exec prisma db verify

# Checks that the database matches the Prisma contract.

9. Create the database client

Create:

src/prisma/db.ts
import 'dotenv/config';
import postgres from '@prisma/orm-postgres/runtime';
import type { Contract } from './contract.d';
import contractJson from './contract.json' with { type: 'json' };

export const db = postgres<Contract>({
contractJson,
url: process.env['DATABASE_URL']!,
});

This creates the typed Prisma database client used by the application.

10. Test the ORM

Create:

scripts/test-user.ts

Use it to create and query a test user through db.

Run:

pnpm exec tsx scripts/test-user.ts

# Tests the complete application → Prisma ORM → Neon PostgreSQL path.

Expected result:

Created user:
{
email: 'adam@example.com',
username: 'adam',
...
}

All users:
[
{
email: 'adam@example.com',
username: 'adam',
...
}
] 11. Final verification
pnpm exec prisma --version

# Confirms the installed Prisma version.

pnpm exec tsc --noEmit

# Checks that the TypeScript project compiles without emitting files.

git status

# Confirms what will be committed.

Final project structure

After setup, you should have something similar to:

project/
├── .env # Neon credentials — NOT committed
├── .gitignore
├── package.json
├── pnpm-lock.yaml
├── prisma.config.ts
├── src/
│ └── prisma/
│ ├── contract.ts # Source of database structure
│ ├── contract.json # Generated
│ ├── contract.d.ts # Generated types
│ └── db.ts # Prisma database client
└── scripts/
└── test-user.ts # Database integration test

Minimal workflow to remember
Install Prisma
↓
Create Neon database
↓
Add DATABASE_URL to .env
↓
Define contract.ts
↓
Configure prisma.config.ts
↓
prisma contract emit
↓
prisma db init --dry-run
↓
prisma db init
↓
prisma db verify
↓
Create db.ts
↓
Write test script
↓
tsx scripts/test-user.ts

This is a good DB setup workflow to keep in the project's documentation and reuse when starting another Prisma 8 + Neon project.

Prisma 8 + Neon workflow

1. Install Prisma CLI
   pnpm add -D prisma

2. Initialize/scaffold Prisma
   pnpm exec prisma init

   # Or use the Prisma scaffolding command when starting from scratch.

3. Add Neon connection string

   # Put DATABASE_URL in .env / Prisma config as required.

4. Verify Prisma setup
   pnpm exec prisma --version
   pnpm exec prisma --help

5. Define/update models + relationships

   # Edit your Prisma contract.

6. Emit the contract
   pnpm exec prisma contract emit

7. Preview database changes
   pnpm exec prisma db init --dry-run

8. Apply changes to Neon
   pnpm exec prisma db init

   # For subsequent schema evolution, use the appropriate db update/migrate workflow.

9. Verify database ↔ contract
   pnpm exec prisma db verify

10. Inspect Neon schema
    pnpm exec prisma db schema

11. Test actual CRUD operations
    pnpm exec tsx scripts/test-user.ts

12. Check Neon dashboard
    # Confirm the table/data exists as expected.
