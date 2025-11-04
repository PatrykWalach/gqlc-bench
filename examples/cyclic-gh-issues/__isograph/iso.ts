import type { IsographEntrypoint } from '@isograph/react';
import { type Organization__operationXOrg__param } from './Organization/operationXOrg/param_type';
import { type Query__fragmentOwnerQuery__param } from './Query/fragmentOwnerQuery/param_type';
import { type Query__operationXQuery__param } from './Query/operationXQuery/param_type';
import { type Query__partial01Query__param } from './Query/partial01Query/param_type';
import { type Query__partial02Query__param } from './Query/partial02Query/param_type';
import { type Query__partial03Query__param } from './Query/partial03Query/param_type';
import { type Query__partial04Query__param } from './Query/partial04Query/param_type';
import { type Query__partial05Query__param } from './Query/partial05Query/param_type';
import { type Query__partial06Query__param } from './Query/partial06Query/param_type';
import { type Query__partial07Query__param } from './Query/partial07Query/param_type';
import { type Query__partial08Query__param } from './Query/partial08Query/param_type';
import { type Query__partial09Query__param } from './Query/partial09Query/param_type';
import { type Query__partial10Query__param } from './Query/partial10Query/param_type';
import { type Query__partial11Query__param } from './Query/partial11Query/param_type';
import { type Query__partial12Query__param } from './Query/partial12Query/param_type';
import { type Query__partial13Query__param } from './Query/partial13Query/param_type';
import { type Query__partial14Query__param } from './Query/partial14Query/param_type';
import { type Query__partial15Query__param } from './Query/partial15Query/param_type';
import { type Query__partial16Query__param } from './Query/partial16Query/param_type';
import { type Query__partial17Query__param } from './Query/partial17Query/param_type';
import { type Query__partial18Query__param } from './Query/partial18Query/param_type';
import { type Query__partial19Query__param } from './Query/partial19Query/param_type';
import { type Query__partial20Query__param } from './Query/partial20Query/param_type';
import { type Query__partial21Query__param } from './Query/partial21Query/param_type';
import { type Query__partial22Query__param } from './Query/partial22Query/param_type';
import { type Query__partial23Query__param } from './Query/partial23Query/param_type';
import { type Query__partial24Query__param } from './Query/partial24Query/param_type';
import { type Query__partial25Query__param } from './Query/partial25Query/param_type';
import { type Repository__fragmentRepository__param } from './Repository/fragmentRepository/param_type';
import { type Repository__operationXHomepage__param } from './Repository/operationXHomepage/param_type';
import entrypoint_Query__fragmentOwnerQuery from '../__isograph/Query/fragmentOwnerQuery/entrypoint';
import entrypoint_Query__operationXQuery from '../__isograph/Query/operationXQuery/entrypoint';
import entrypoint_Query__partial01Query from '../__isograph/Query/partial01Query/entrypoint';
import entrypoint_Query__partial02Query from '../__isograph/Query/partial02Query/entrypoint';
import entrypoint_Query__partial03Query from '../__isograph/Query/partial03Query/entrypoint';
import entrypoint_Query__partial04Query from '../__isograph/Query/partial04Query/entrypoint';
import entrypoint_Query__partial05Query from '../__isograph/Query/partial05Query/entrypoint';
import entrypoint_Query__partial06Query from '../__isograph/Query/partial06Query/entrypoint';
import entrypoint_Query__partial07Query from '../__isograph/Query/partial07Query/entrypoint';
import entrypoint_Query__partial08Query from '../__isograph/Query/partial08Query/entrypoint';
import entrypoint_Query__partial09Query from '../__isograph/Query/partial09Query/entrypoint';
import entrypoint_Query__partial10Query from '../__isograph/Query/partial10Query/entrypoint';
import entrypoint_Query__partial11Query from '../__isograph/Query/partial11Query/entrypoint';
import entrypoint_Query__partial12Query from '../__isograph/Query/partial12Query/entrypoint';
import entrypoint_Query__partial13Query from '../__isograph/Query/partial13Query/entrypoint';
import entrypoint_Query__partial14Query from '../__isograph/Query/partial14Query/entrypoint';
import entrypoint_Query__partial15Query from '../__isograph/Query/partial15Query/entrypoint';
import entrypoint_Query__partial16Query from '../__isograph/Query/partial16Query/entrypoint';
import entrypoint_Query__partial17Query from '../__isograph/Query/partial17Query/entrypoint';
import entrypoint_Query__partial18Query from '../__isograph/Query/partial18Query/entrypoint';
import entrypoint_Query__partial19Query from '../__isograph/Query/partial19Query/entrypoint';
import entrypoint_Query__partial20Query from '../__isograph/Query/partial20Query/entrypoint';
import entrypoint_Query__partial21Query from '../__isograph/Query/partial21Query/entrypoint';
import entrypoint_Query__partial22Query from '../__isograph/Query/partial22Query/entrypoint';
import entrypoint_Query__partial23Query from '../__isograph/Query/partial23Query/entrypoint';
import entrypoint_Query__partial24Query from '../__isograph/Query/partial24Query/entrypoint';
import entrypoint_Query__partial25Query from '../__isograph/Query/partial25Query/entrypoint';

// This is the type given to regular client fields.
// This means that the type of the exported iso literal is exactly
// the type of the passed-in function, which takes one parameter
// of type TParam.
type IdentityWithParam<TParam extends object, TReturnConstraint = unknown> = <TClientFieldReturn extends TReturnConstraint>(
  clientField: (param: TParam) => TClientFieldReturn
) => (param: TParam) => TClientFieldReturn;

// This is the type given it to client fields with @component.
// This means that the type of the exported iso literal is exactly
// the type of the passed-in function, which takes two parameters.
// The first has type TParam, and the second has type TComponentProps.
//
// TComponentProps becomes the types of the props you must pass
// whenever the @component field is rendered.
type IdentityWithParamComponent<TParam extends object> = <
  TClientFieldReturn,
  TComponentProps = Record<PropertyKey, never>,
>(
  clientComponentField: (data: TParam, componentProps: TComponentProps) => TClientFieldReturn
) => (data: TParam, componentProps: TComponentProps) => TClientFieldReturn;

type WhitespaceCharacter = ' ' | '\t' | '\n';
type Whitespace<In> = In extends `${WhitespaceCharacter}${infer In}`
  ? Whitespace<In>
  : In;

// This is a recursive TypeScript type that matches strings that
// start with whitespace, followed by TString. So e.g. if we have
// ```
// export function iso<T>(
//   isographLiteralText: T & MatchesWhitespaceAndString<'field Query.foo', T>
// ): Bar;
// ```
// then, when you call
// ```
// const x = iso(`
//   field Query.foo ...
// `);
// ```
// then the type of `x` will be `Bar`, both in VSCode and when running
// tsc. This is how we achieve type safety — you can only use fields
// that you have explicitly selected.
type MatchesWhitespaceAndString<
  TString extends string,
  T
> = Whitespace<T> extends `${TString}${string}` ? T : never;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Organization.operationXOrg', T>
): IdentityWithParam<Organization__operationXOrg__param>;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Query.fragmentOwnerQuery', T>
): IdentityWithParam<Query__fragmentOwnerQuery__param>;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Query.operationXQuery', T>
): IdentityWithParam<Query__operationXQuery__param>;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Query.partial01Query', T>
): IdentityWithParam<Query__partial01Query__param>;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Query.partial02Query', T>
): IdentityWithParam<Query__partial02Query__param>;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Query.partial03Query', T>
): IdentityWithParam<Query__partial03Query__param>;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Query.partial04Query', T>
): IdentityWithParam<Query__partial04Query__param>;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Query.partial05Query', T>
): IdentityWithParam<Query__partial05Query__param>;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Query.partial06Query', T>
): IdentityWithParam<Query__partial06Query__param>;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Query.partial07Query', T>
): IdentityWithParam<Query__partial07Query__param>;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Query.partial08Query', T>
): IdentityWithParam<Query__partial08Query__param>;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Query.partial09Query', T>
): IdentityWithParam<Query__partial09Query__param>;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Query.partial10Query', T>
): IdentityWithParam<Query__partial10Query__param>;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Query.partial11Query', T>
): IdentityWithParam<Query__partial11Query__param>;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Query.partial12Query', T>
): IdentityWithParam<Query__partial12Query__param>;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Query.partial13Query', T>
): IdentityWithParam<Query__partial13Query__param>;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Query.partial14Query', T>
): IdentityWithParam<Query__partial14Query__param>;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Query.partial15Query', T>
): IdentityWithParam<Query__partial15Query__param>;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Query.partial16Query', T>
): IdentityWithParam<Query__partial16Query__param>;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Query.partial17Query', T>
): IdentityWithParam<Query__partial17Query__param>;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Query.partial18Query', T>
): IdentityWithParam<Query__partial18Query__param>;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Query.partial19Query', T>
): IdentityWithParam<Query__partial19Query__param>;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Query.partial20Query', T>
): IdentityWithParam<Query__partial20Query__param>;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Query.partial21Query', T>
): IdentityWithParam<Query__partial21Query__param>;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Query.partial22Query', T>
): IdentityWithParam<Query__partial22Query__param>;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Query.partial23Query', T>
): IdentityWithParam<Query__partial23Query__param>;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Query.partial24Query', T>
): IdentityWithParam<Query__partial24Query__param>;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Query.partial25Query', T>
): IdentityWithParam<Query__partial25Query__param>;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Repository.fragmentRepository', T>
): IdentityWithParam<Repository__fragmentRepository__param>;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Repository.operationXHomepage', T>
): IdentityWithParam<Repository__operationXHomepage__param>;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'entrypoint Query.fragmentOwnerQuery', T>
): typeof entrypoint_Query__fragmentOwnerQuery;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'entrypoint Query.operationXQuery', T>
): typeof entrypoint_Query__operationXQuery;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'entrypoint Query.partial01Query', T>
): typeof entrypoint_Query__partial01Query;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'entrypoint Query.partial02Query', T>
): typeof entrypoint_Query__partial02Query;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'entrypoint Query.partial03Query', T>
): typeof entrypoint_Query__partial03Query;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'entrypoint Query.partial04Query', T>
): typeof entrypoint_Query__partial04Query;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'entrypoint Query.partial05Query', T>
): typeof entrypoint_Query__partial05Query;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'entrypoint Query.partial06Query', T>
): typeof entrypoint_Query__partial06Query;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'entrypoint Query.partial07Query', T>
): typeof entrypoint_Query__partial07Query;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'entrypoint Query.partial08Query', T>
): typeof entrypoint_Query__partial08Query;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'entrypoint Query.partial09Query', T>
): typeof entrypoint_Query__partial09Query;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'entrypoint Query.partial10Query', T>
): typeof entrypoint_Query__partial10Query;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'entrypoint Query.partial11Query', T>
): typeof entrypoint_Query__partial11Query;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'entrypoint Query.partial12Query', T>
): typeof entrypoint_Query__partial12Query;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'entrypoint Query.partial13Query', T>
): typeof entrypoint_Query__partial13Query;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'entrypoint Query.partial14Query', T>
): typeof entrypoint_Query__partial14Query;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'entrypoint Query.partial15Query', T>
): typeof entrypoint_Query__partial15Query;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'entrypoint Query.partial16Query', T>
): typeof entrypoint_Query__partial16Query;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'entrypoint Query.partial17Query', T>
): typeof entrypoint_Query__partial17Query;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'entrypoint Query.partial18Query', T>
): typeof entrypoint_Query__partial18Query;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'entrypoint Query.partial19Query', T>
): typeof entrypoint_Query__partial19Query;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'entrypoint Query.partial20Query', T>
): typeof entrypoint_Query__partial20Query;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'entrypoint Query.partial21Query', T>
): typeof entrypoint_Query__partial21Query;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'entrypoint Query.partial22Query', T>
): typeof entrypoint_Query__partial22Query;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'entrypoint Query.partial23Query', T>
): typeof entrypoint_Query__partial23Query;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'entrypoint Query.partial24Query', T>
): typeof entrypoint_Query__partial24Query;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'entrypoint Query.partial25Query', T>
): typeof entrypoint_Query__partial25Query;

export function iso(_isographLiteralText: string):
  | IdentityWithParam<any>
  | IdentityWithParamComponent<any>
  | IsographEntrypoint<any, any, any>
{
  throw new Error('iso: Unexpected invocation at runtime. Either the Babel transform ' +
      'was not set up, or it failed to identify this call site. Make sure it ' +
      'is being used verbatim as `iso`. If you cannot use the babel transform, ' + 
      'set options.no_babel_transform to true in your Isograph config. ');
}