# Origin Subsquid

### [Design Decisions Notion Document](https://www.notion.so/originprotocol/Subsquid-Design-Decisions-04ef82ae0d6848d1b14de893e9929ce4#d8e8d367069c4a619809e926f72db074)

## Setup

```bash
# Install @subsquid/cli - the `sqd` command globally
npm i -g @subsquid/cli

# Install dependencies
npm ci
```

## Frequent Commands

```shell
sqd typegen
yarn codegen && yarn migration:generate
yarn setup && yarn process:lrt
sqd serve
```

With `sqd serve` a GraphiQL playground will be available at [localhost:4350/graphql](http://localhost:4350/graphql).

## Env Options

```shell
BLOCK_FROM=18421105 yarn process:lrt # Start processing at block 18421105
BLOCK_TO=18421105 yarn process:lrt   # Process up to block 18421105
```

## Dev flow

### 1. Define database schema

Start development by defining the schema of the target database via `schema.graphql`.
Schema definition consists of regular graphql type declarations annotated with custom directives.
Full description of `schema.graphql` dialect is available [here](https://docs.subsquid.io/basics/schema-file).

### 2. Generate TypeORM classes

Mapping developers use TypeORM [EntityManager](https://typeorm.io/#/working-with-entity-manager)
to interact with target database during data processing. All necessary entity classes are
generated by the squid framework from `schema.graphql`. This is done by running `yarn codegen`
command.

### 3. Generate database migrations

All database changes are applied through migration files located at `db/migrations`.
There is only ever one migration.

```bash
yarn migration:generate
```

See [docs on database migrations](https://docs.subsquid.io/basics/db-migrations) for more details.

### 4. Import ABI contract and generate interfaces to decode events

It is necessary to import the respective ABI definition to decode EVM logs. One way to generate a type-safe facade class
to decode EVM logs is by placing the relevant JSON ABIs to `./abi`, then using `squid-evm-typegen(1)` via an `sqd`
script:

```bash
sqd typegen
```

See more details on the [`squid-evm-typegen` doc page](https://docs.subsquid.io/evm-indexing/squid-evm-typegen).

## Project conventions

Squid tools assume a certain [project layout](https://docs.subsquid.io/basics/squid-structure):

- All compiled js files must reside in `lib` and all TypeScript sources in `src`.
  The layout of `lib` must reflect `src`.
- All TypeORM classes must be exported by `src/model/index.ts` (`lib/model` module).
- Database schema must be defined in `schema.graphql`.
- Database migrations must reside in `db/migrations` and must be plain js files.
- `sqd(1)` and `squid-*(1)` executables consult `.env` file for environment variables.

## Deploy a new version

- Visit [Squid deploy dashboard](https://app.subsquid.io/squids/deploy)
- Auth with `sqd auth -k sqd_XXX` (key is on squid deploy page)
- Update `squid.yaml` to set the correct version
- Run `sqd deploy .`
- Make branch for new version (eg v9) and push to origin
- Switch back to main branch
